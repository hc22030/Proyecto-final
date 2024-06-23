function Enviar() {
    var params = {
        from_name: document.getElementById("nombre").value,
        email_id: document.getElementById("correo").value,
        subject: document.getElementById("asunto").value,
        message: document.getElementById("mensaje").value
    }
    emailjs.send("service_b6in7bo", "template_ozuh6do", params).then(function (res) {
        alert("Success! " + res.status);
    })
}
