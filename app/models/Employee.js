const db = require('../../config/database')

class Employee{
    static findAll(callback) {
        db.query('SELECT * FROM employees', (error, results) => {
            if (error) throw error;
            callback(null, results);
        });
    }

    static create(userData, callback) {
        db.query('INSERT INTO employees SET ?', userData, (error, results) => {
            if (error) return callback(error, null);
            callback(null, results.insertId);
        });
    }

    static update(id, userData, callback) {
        db.query('SELECT * FROM employees WHERE id = ?', [id], (error, results) => {
            if (error) return callback(error, null);

            if (results.length === 0) {
                return callback(new Error("Record not found"), null);
            }

            db.query('UPDATE employees SET ? WHERE id = ?', [userData, id], (updateError, updateResults) => {
                if (updateError) return callback(updateError, null);
                callback(null, updateResults);
            });
        });
    }

    static delete(id, callback) {
        db.query('SELECT * FROM employees WHERE id = ?', [id], (error, results) => {
            if (error) return callback(error, null);
            if (results.length === 0) {
                return callback(new Error("Record not found"), null);
            }
            db.query('DELETE FROM employees WHERE id = ?', [id], (deleteError, deleteResults) => {
                if (deleteError) return callback(deleteError, null);
                callback(null, deleteResults);
            });
        });
    }

}

module.exports = Employee;