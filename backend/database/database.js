const Database = require('sqlite-async')

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price DECIMAL(20,2) NOT NULL,
            description TEXT NULL,
            amount BIGINT NULL,
            categoryId INTEGER NOT NULL,
                FOREIGN KEY (categoryId)
                REFERENCES category (id)
        );
        
        CREATE TABLE IF NOT EXISTS category (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        );
    `)
}
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
