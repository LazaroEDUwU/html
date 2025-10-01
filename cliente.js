
(function() {
  emailjs.init("RZ5HwNeinwyn6jmZB");
})();

function enviarCorreo(e) {
  e.preventDefault();

  emailjs.send("service_wbk635y", "template_kit18bl", {
    from_name: document.getElementById("nombre").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("mensaje").value
  })
  .then((res) => {
    alert("Correo enviado correctamente!");
    console.log("Respuesta:", res);
  })
  .catch((err) => {
    alert("Error al enviar el correo.");
    console.error("Error:", err);
  });
}
