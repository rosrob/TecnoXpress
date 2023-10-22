const formularioRegistro = document.querySelector(".formulario-contact");
const nombre = document.querySelector('input[name="Nombre"]');
const apellido = document.querySelector('input[name="Apellido"]');
const DNI = document.querySelector('input[name="DNI"]');
const fechaNacimiento = document.querySelector('input[name="fecha_de_nacimiento"]');
const celular = document.querySelector('input[name="celular"]');
const email = document.querySelector('input[name="Email"]');
const contraseña = document.querySelector('input[name="contraseña"]');
const confirmarContraseña = document.querySelector('input[name="confirmar_contraseña"]');
const enviarButton = document.getElementById("enviar-button");

formularioRegistro.addEventListener("submit", (event) => {
  event.preventDefault();
  validaCamposRegistro();
});

function validaCamposRegistro() {
  const nombreValor = nombre.value.trim();
  const apellidoValor = apellido.value.trim();
  const DNIValor = DNI.value.trim();
  const fechaNacimientoValor = fechaNacimiento.value;
  const celularValor = celular.value.trim();
  const emailValor = email.value.trim();
  const contraseñaValor = contraseña.value;
  const confirmarContraseñaValor = confirmarContraseña.value;

  if (nombreValor.length < 4 || nombreValor.length > 20) {
    alert("El campo Nombre debe tener entre 4 y 20 caracteres.");
    return;
  }

  if (apellidoValor === "") {
    alert("El campo Apellido es obligatorio.");
    return;
  }

  if (DNIValor === "" || DNIValor.length !== 8 || !/^\d+$/.test(DNIValor)) {
    alert("El campo DNI debe contener exactamente 8 números.");
    return;
  }

  if (fechaNacimientoValor === "") {
    alert("Seleccione una Fecha de Nacimiento válida.");
    return;
  }

  if (celularValor === "" || !/^\d{10}$/.test(celularValor)) {
    alert("El campo Celular debe contener 10 números.");
    return;
  }

  if (!isValidEmail(emailValor)) {
    alert("Ingrese una dirección de correo electrónico válida.");
    return;
  }

  if (contraseñaValor === "" || contraseñaValor !== confirmarContraseñaValor) {
    alert("Las contraseñas no coinciden o son inválidas.");
    return;
  }

  // Si llegamos aquí, el formulario se completó correctamente
  // Habilitar el botón de envío
  enviarButton.removeAttribute("disabled");

  // Mostrar un mensaje de éxito
  alert("El formulario se ha enviado con éxito.");
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
