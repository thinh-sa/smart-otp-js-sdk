const crypto = require('crypto-browserify');

const { getEncryptedBase64FromSQLite } = require('../data/sqlite.store');

async function decryptSecretKeyWithPassword(password) {
  try {
    // get encrypted secret key from SQLite
    const sqlQuery = 'SELECT data FROM encrypted_data ORDER BY id DESC LIMIT 1';
    const encryptedSecretKey = await getEncryptedBase64FromSQLite(sqlQuery);

    // Convert the encrypted secret key (Base64 string) and password to Buffers
    const encryptedBuffer = Buffer.from(encryptedSecretKey, 'base64');
    //   const passwordBuffer = Buffer.from(password);

    let passwordKey = crypto
      .createHash('sha256')
      .update(String(password))
      .digest('base64')
      .substring(0, 32);

    // Extract the initialization vector (IV) from the encrypted data
    const iv = encryptedBuffer.subarray(0, 16);

    // Extract the encrypted data (excluding the IV)
    const encryptedData = encryptedBuffer.subarray(16);

    // Create a decipher using the password and IV
    const decipher = crypto.createDecipheriv('aes-256-cbc', passwordKey, iv);

    // Decrypt the encrypted data using the decipher
    let decryptedData = decipher.update(encryptedData);
    decryptedData = Buffer.concat([decryptedData, decipher.final()]);

    // Convert the decrypted Buffer to a string
    const decryptedSecretKey = decryptedData.toString();

    return decryptedSecretKey;
  } catch (err) {
    throw err;
  }
}

// decryptSecretKeyWithPassword(
//   // 'GAy1KL+NlCFg6lUpiQYAHykHEHrxk99UyL0xEXNay3s=',
//   '12a',
// ).then((res) => console.log(res));

module.exports = {
  decryptSecretKeyWithPassword,
};
