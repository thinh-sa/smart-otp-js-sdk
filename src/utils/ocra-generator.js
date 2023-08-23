// const crypto = require('crypto');
const crypto = require('crypto-browserify');
const { decryptSecretKeyWithPassword } = require('./decryptSecretKey');

// // Shared secret key
const sharedSecret =
  'JNJFSRSFJEZESR2BKREEWSK2KNDUESKUGZIEGWCLKFMFOUKNGJHVASSFINBVKSRSI5DEGRJWJYZTGTSCJFAQ';

// // CR code
// const crCode = 'OCRA-1:HOTP-SHA1-6:QN08:302687';

// Function to generate OTP from CR code
async function generateOTPFromCRCode(challenge, pin) {
  // get shared secretKey from local DB
  //   const sharedSecret = await decryptSecretKeyWithPassword(pin);

  // Decode the shared secret from Base64 to a Buffer
  const sharedSecretBuffer = Buffer.from(sharedSecret, 'base64');

  // Convert the challenge into a hex string
  const challengeHex = Buffer.from(challenge).toString('hex');

  const interval = 60; // TOTP time interval in seconds
  const timestamp = Math.floor(Date.now() / 1000); // Current time in seconds
  const counter = Math.floor(timestamp / interval); // Counter based on the time interval
  const counterBuffer = Buffer.alloc(8);
  counterBuffer.writeBigInt64BE(BigInt(counter), 0);

  // Create the HMAC-SHA1 value using the shared secret and the challenge and counter as the message
  const hmac = crypto.createHmac('sha1', sharedSecretBuffer);
  hmac.update(Buffer.from(challengeHex, 'hex'));
  hmac.update(counterBuffer);

  const hotpValue = hmac.digest('hex');
  // Convert the HOTP value to a decimal number
  const hotpDecimal = parseInt(hotpValue.slice(0, 8), 16);
  // Calculate the final OTP value as a 6-digit number (or any specified number of digits)
  const otp = (hotpDecimal % 10 ** 6).toString().padStart(6, '0');

  // Left-pad the OTP with zeros to match the desired length
  const paddedOtp = otp.padStart(6, '0');

  return paddedOtp;
}

// Generate the OTP from CR code
// generateOTPFromCRCode('234123', '1234').then((otp) => console.log(otp));

module.exports = {
  generateOTPFromCRCode,
};
