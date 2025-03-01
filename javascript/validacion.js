document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores de los campos
    var name = document.getElementById("InputName").value;
    var email = document.getElementById("InputEmail").value;
    var date = document.getElementById("InputDate").value;
    var time = document.getElementById("InputTime").value;
    var service = document.getElementById("InputService").value;
    var phone = document.getElementById("InputPhone").value;
    var message = document.getElementById("InputMessage").value;

    console.log(name, email, date, time, service, phone, message);

    // Validar campos
    if (name === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }
    if (email === "") {
        alert("Por favor, ingrese su email.");
        return false;
    }
    if (date === "") {
        alert("Por favor, ingrese la fecha.");
        return false;
    }
    if (time === "") {
        alert("Por favor, ingrese la hora.");
        return false;
    }
    if (service === "") {
        alert("Por favor, seleccione un tipo de servicio.");
        return false;
    }
    if (phone === "") {
        alert("Por favor, ingrese su número de teléfono.");
        return false;
    }
    if (message === "") {
        alert("Por favor, ingrese algún detalle.");
        return false;
    }

    // Si todos los campos son válidos, enviar el formulario
    alert("Formulario enviado correctamente.");
    this.submit();
});