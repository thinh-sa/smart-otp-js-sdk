const crypto = require('crypto-browserify');

const { saveEncryptedBase64ToSQLite } = require('../data/sqlite.store');

function encryptSecretKeyWithPassword(secretKey, password) {
  try {
    // Convert the secretKey and password to Buffers
    const secretKeyBuffer = Buffer.from(secretKey);
    //   const passwordBuffer = Buffer.from(password);

    let passwordKey = crypto
      .createHash('sha256')
      .update(String(password))
      .digest('base64')
      .substring(0, 32);

    // Generate a random initialization vector (IV)
    const iv = crypto.randomBytes(16);

    // Create a cipher using the password and IV
    const cipher = crypto.createCipheriv('aes-256-cbc', passwordKey, iv);

    // Encrypt the secretKey using the cipher
    let encryptedData = cipher.update(secretKeyBuffer);
    encryptedData = Buffer.concat([encryptedData, cipher.final()]);

    // Combine the IV and encrypted data into a single Buffer
    const combinedBuffer = Buffer.concat([iv, encryptedData]);

    // Convert the Buffer to a Base64-encoded string
    const encryptedBase64 = combinedBuffer.toString('base64');

    // save encrypted secret key to SQLite
    saveEncryptedBase64ToSQLite(encryptedBase64);

    return encryptedBase64;
  } catch (err) {
    throw err;
  }
}

// console.log(encryptSecretKeyWithPassword('fintechKey', '12a'));

module.exports = {
  encryptSecretKeyWithPassword,
};
