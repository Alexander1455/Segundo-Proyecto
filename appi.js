const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: 'MYSQL$q1w2e3r4.',
     database: 'Informacion'
});

connection.connect((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Connected to the database");
    }
});


// app.get('/', (request, response) => {

//     connection.query(
//         "SELECT * FROM productos WHERE eliminado = 0 AND stock > 0;", 
//         (error, data) => {
//             if (error) {
//                 console.error(error);
//                 response.status(500).send("Error retrieving products");
//             } else {
//                 response.send(data);
//             }
//         }
//     );

app.post('/enviado', (request, response) => {
    const { DNI, full_name, direccion, correo, telefono } = request.body;
    connection.query('INSERT INTO Datos (DNI, full_name, direccion, correo, telefono) VALUES (?, ?, ?, ?)', [DNI, full_name, direccion, correo, telefono], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error creating DataBase');
      } else {
        response.send('Database created successfully');
      }
    });
  });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

