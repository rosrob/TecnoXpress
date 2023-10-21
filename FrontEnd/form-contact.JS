const formularioContact = document.querySelector(".formulario-contact");
const Nombre = document.getElementById("Nombre");
const Email = document.getElementById("Email");
const Telefono = document.getElementById("Telefono");
const Asunto = document.getElementById("Asunto");
const Mensaje = document.getElementById("Mensaje");
const mensajeEnviado = document.getElementById("mensaje-enviado"); // Agrega un elemento con el id "mensaje-enviado" en tu HTML

formularioContact.addEventListener("submit", (event) => {
  event.preventDefault();
  validaCamposContacto();
});

function validaCamposContacto() {
  const nombreValor = Nombre.value.trim();
  const emailValor = Email.value.trim();
  const telefonoValor = Telefono.value.trim();
  const asuntoValor = Asunto.value.trim();
  const mensajeValor = Mensaje.value.trim();

  if (nombreValor === "" || emailValor === "" || telefonoValor === "" || asuntoValor === "" || mensajeValor === "") {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (!validarEmail(emailValor)) {
    alert("El correo electrónico ingresado no es válido.");
    return;
  }

  mensajeEnviado.textContent = "¡Su mensaje ha sido enviado!"
  mensajeEnviado.style.color = "green"

}

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
  }