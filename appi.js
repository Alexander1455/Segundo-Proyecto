const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MYSQL$q1w2e3r4.',
    database: 'tienda_abc'
});

connection.connect((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Connected to the database");
    }
});


app.get('/productos', (request, response) => {

    connection.query(
        "SELECT * FROM productos WHERE eliminado = 0 AND stock > 0;", 
        (error, data) => {
            if (error) {
                console.error(error);
                response.status(500).send("Error retrieving products");
            } else {
                response.send(data);
            }
        }
    );

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
