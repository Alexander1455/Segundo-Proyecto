<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Participa en el sorteo</title>
</head>
<body>
    <div class="container">
        <h1>Participa en el sorteo</h1>
        <form class="form">
            <div class="form-box">
                <label for="nombre">Nombres completos:</label>
                <input type="text" id="nombre" name="full_name" required>
            </div>
            <div class="form-box">
                <label for="apellido">Dirección:</label>
                <input type="text" id="direccion" name="direccion" required>
            </div>
            <div class="form-box">
                <label for="correo">Correo:</label>
                <input type="email" id="correo" name="correo" required>
            </div>
            <div class="form-box">
                <label for="numero">Número:</label>
                <input type="number" id="numero" name="telefono" maxlength="9" required>
            </div>
            <!-- <div class="form-box">
                <label for="dni">DNI:</label>
                <input type="number" id="dni" name="DNI" maxlength="9" required>
            </div>             -->
            <div class="button-box">
                <button class="enviar" type="submit">Enviar</button>
                <button type="reset">Limpiar</button>
            </div>
        </form>
        <p class="success-message"></p>
    </div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(() => {
            $('.form').submit((evt) => {
                evt.preventDefault();
                const params = {
                    full_name: evt.target.full_name.value,
                    direccion: evt.target.direccion.value,
                    correo: evt.target.correo.value,
                    telefono: evt.target.telefono.value
                }
                fetch('/enviado', {
                    body: JSON.stringify(params),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Set the content type to JSON
                    },
                }).then((res) => {
                    if(!res.ok) {
                        throw new Error('ERROR', err)
                    }
                    alert('REGISTRADO CORRECTAMENTE')
                })
                .catch((err) => {
                    console.log('ERROR', error)
                })
            });
        })
        // const form = document.querySelector('.form');
        // form.addEventListener('submit', (evt) => {
            
        // });
    </script>            
</body>
</html>
