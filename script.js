let header = `
<a  href="index.html" id="iconheader">
            <img src="IMGS/sunsea.png" alt="Mundo">
            Green Solutions
        </a>
        <nav>
            <a href="index.html">Inicio</a>
            <a href="#Soluciones">Soluciones</a>
            <a href="Clientes.html" target="_blank">Nuestros Clientes</a>
            <a href="contacto.html" target="_blank">Contacto</a>
        </nav>
`
 document.getElementById ("idheader").innerHTML = header;

 let footer =`
 
        <a href="index.html">
            <img src="IMGS/sunsea-wht.png" alt="Summer Exploring Logo">
            Green Solutions
        </a>

        <div>

            <a href="">
                <img src="IMGS/instagram-w 1.png" alt="Instagram">
            </a>
            <a href="">
                <img src="IMGS/facebook-w 1.png" alt="Facebook">
            </a>
            <a href="">
                <img src="IMGS/twitter-w 1.png" alt="Twitter">
            </a>
            
        </div>
 `

 document.getElementById("idfooter").innerHTML = footer;

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-contacto");
    const botonEnviar = document.getElementById("enviar");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Con esto evitamos el envío por defecto del formulario

        // Aqui obtenemos los valores de los campos
        const nombre = document.getElementById("Nombre").value.trim();
        const email = document.getElementById("Email").value.trim();
        const consulta = document.getElementById("Consulta").value.trim();

        // Ahora con el condicional IF vamos a validar los campos
        if (nombre === "" || email === "" || consulta === "") {
            alert("Por favor, complete todos los campos.");
        } else if (!isValidEmail(email)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
        } else {
            // AQUI IRIA EL CODIGO UTILIZADO PARA ENVIAR EL EMAIL POR BACKEND O POR UN SERVICIO DE TERCEROS
            alert("Formulario enviado correctamente.");
            formulario.reset(); // Limpia el formulario
        }
    });

    function isValidEmail(email) {
        // Con la siguiente expresión regular (encontrada en internet) se puede validar direcciones de correo electrónico
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});

