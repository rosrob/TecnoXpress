const formularioRegistro = document.querySelector(".formulario-registro")
const nombre = document.querySelector('input[name="nombre"]')
const apellido = document.querySelector('input[name="apellido"]')
const DNI = document.querySelector('input[name="DNI"]')
const fechaNacimiento = document.querySelector('input[name="fecha_de_nacimiento"]')
const celular = document.querySelector('input[name="celular"]')
const email = document.querySelector('input[name="email"]')
const contraseña = document.querySelector('input[name="contraseña"]')
const confirmarContraseña = document.querySelector('input[name="confirmar_contraseña')

formularioRegistro.addEventListener("submit", (event) => {
  event.preventDefault()
  validaCamposRegistro()
});

// Validación de DNI
DNI.addEventListener("input", function () {
  if (this.value.length > 8) {
    this.value = this.value.slice(0, 8)
  }
});

// Validación de celular
celular.addEventListener("input", function () {
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10)
  }
});

function validaCamposRegistro() {
  const nombreValor = nombre.value.trim()
  const apellidoValor = apellido.value.trim()
  const DNIValor = DNI.value.trim()
  const fechaNacimientoValor = fechaNacimiento.value
  const celularValor = celular.value.trim()
  const emailValor = email.value.trim()
  const contraseñaValor = contraseña.value
  const confirmarContraseñaValor = confirmarContraseña.value

  if (nombreValor.length < 4 || nombreValor.length > 15) {
    alert("El campo Nombre debe tener entre 4 y 15 caracteres.")
    return
  }

  if (apellidoValor.length < 4 || apellidoValor.length > 15) {
    alert("El campo Apellido debe tener entre 4 y 15 caracteres.")
    return
  }

  if (DNIValor.length !== 8 ) {
    alert("El campo DNI debe contener exactamente 8 números.");
    return;
  }

  if (!fechaNacimientoValor) {
    alert("Debe seleccionar una Fecha de Nacimiento.")
    return
  }

  if (celularValor.length !== 10 || !/^\d{10}$/.test(celularValor)) {
    alert("El campo Celular debe contener exactamente 10 números.")
    return
  }

  if (contraseñaValor.length < 4) {
    alert("La contraseña debe tener al menos 4 caracteres.")
    return
  }

  if (contraseñaValor !== confirmarContraseñaValor) {
    alert("Las contraseñas no coinciden.")
    return
  }

  window.location.href = "index.html";
}

