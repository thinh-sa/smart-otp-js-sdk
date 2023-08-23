const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mobile_storage.db');

// Create a table (if it doesn't exist)
db.run(`
  CREATE TABLE IF NOT EXISTS encrypted_data (
    id INTEGER PRIMARY KEY,
    data TEXT
  )
`);

// Save encryptedBase64 to the SQLite database
function saveEncryptedBase64ToSQLite(encryptedBase64) {
  db.run(
    'INSERT INTO encrypted_data (data) VALUES (?)',
    [encryptedBase64],
    function (err) {
      if (err) {
        console.error('Error saving data to SQLite:', err.message);
      } else {
        console.log(`Data saved to SQLite with ID: ${this.lastID}`);
      }
    },
  );
}

// Retrieve the encryptedBase64 from the SQLite database
function getEncryptedBase64FromSQLite(query) {
  return new Promise((resolve, reject) => {
    db.get(query, function (err, row) {
      if (err) {
        console.error('Error retrieving data from SQLite:', err.message);
        reject(err);
        return;
      } else {
        if (row) {
          // console.log('Retrieved encryptedBase64:', row.data);
          const res = row.data;
          resolve(res);
        } else {
          console.log('No data found in SQLite.');
          return;
        }
      }
    });
  });
}

// Close the database connection when done
function closeDb() {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Database connection closed.');
  });
}

// Usage example:
// const encryptedBase64 = 'GAy1KL+NlCFg6lUpiQYAHykHEHrxk99UyL0xEXNay3s=';
// saveEncryptedBase64ToSQLite(encryptedBase64);
// getEncryptedBase64FromSQLite();

module.exports = {
  saveEncryptedBase64ToSQLite,
  getEncryptedBase64FromSQLite,
  closeDb,
};
