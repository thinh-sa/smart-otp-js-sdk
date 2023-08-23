const JsSHA = require('jssha/dist/sha1');

const decToHex = (dec) => dec.toString(16);
const hexToDec = (hex) => parseInt(hex, 16);

const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const base32ToHex = (base32) => {
  let bits = base32
    .split('')
    .map((char) => {
      let val = base32chars.indexOf(char.toUpperCase());
      if (val < 0) {
        throw new Error('Illegal Base32 character: ' + char);
      }
      return val;
    })
    .map((val) => val.toString(2).padStart(5, '0'))
    .join('');

  return bits
    .match(/.{4}/g)
    .map((chunk) => parseInt(chunk, 2).toString(16))
    .join('');
};

const totpGenerator = function (secretBase32, period, tokenLength = 6) {
  const stepSeconds =
    Number.isInteger(Number(period)) && Number(period) > 0
      ? Number(period)
      : 30;

  if (secretBase32.length < 16) {
    throw new Error(
      'Secret minimum length is 16, but was only' + secretBase32.length,
    );
  }

  let secretHex = base32ToHex(secretBase32);
  if (secretHex.length % 2 !== 0) {
    secretHex += '0';
  }
  let counter = Math.floor(Date.now() / 1000 / stepSeconds);
  let counterHex = decToHex(counter);

  let shaObj = new JsSHA('SHA-1', 'HEX', {
    hmacKey: { value: secretHex, format: 'HEX' },
  });
  shaObj.update(counterHex.padStart(16, '0'));
  let hmac = shaObj.getHMAC('HEX');
  let offset = hexToDec(hmac.slice(-1));
  const token = String(
    hexToDec(hmac.substr(offset * 2, 8)) & hexToDec('7fffffff'),
  ).slice(-tokenLength);

  const remainingSeconds = stepSeconds - ((Date.now() / 1000) % stepSeconds);
  return {
    otp: token,
    // remainingSeconds,
    // stepSeconds,
  };
};

// console.log(
//   totpGenerator(
//     'JRGVQWCRJ5FEUR2BGNDTIUSDKNDVCM2ELFLTEMSGGQ3UQVZWGJIE4TSXIY2E2S2VJ5NESVSNGUZEQRKOI5IQ',
//   ),
// );

module.exports = {
  totpGenerator,
};
