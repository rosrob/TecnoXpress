const formularioRegistro = document.querySelector(".formulario-registro");
const nombre = document.querySelector('input[name="nombre"]');
const apellido = document.querySelector('input[name="apellido"]');
const DNI = document.querySelector('input[name="DNI"]');
const fechaNacimiento = document.querySelector('input[name="fecha de nacimiento"]');
const celular = document.querySelector('input[name="celular"]');
const email = document.querySelector('input[name="email"]');
const contraseña = document.querySelector('input[name="contraseña"]');
const confirmarContraseña = document.querySelector('input[name="confirmar contraseña"]');

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
  const contraseñaValor = contraseña.value.trim();
  const confirmarContraseñaValor = confirmarContraseña.value.trim();

  if (nombreValor === "") {
    alert("El campo Nombre es obligatorio.");
    return;
  }

  if (apellidoValor === "") {
    alert("El campo Apellido es obligatorio.");
    return;
  }

  if (DNIValor === "" || DNIValor.length !== 8 || !/^\d+$/.test(DNIValor)) {
    alert("El campo DNI debe contener 8 números.");
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

  if (emailValor === "" || !isValidEmail(emailValor)) {
    alert("Ingrese una dirección de correo electrónico válida.");
    return;
  }

  if (contraseñaValor === "" || contraseñaValor !== confirmarContraseñaValor) {
    alert("Las contraseñas no coinciden o son inválidas.");
    return;
  }

  window.location.href = "form_ingreso.html";
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
