document.addEventListener("DOMContentLoaded", function navElement() {
    const containerNav = document.getElementById("containerNav");
  
    if (containerNav) {
      const htmlToInsert = `<section id="top-menu">
  <nav class="navbar navbar-expand-sm ">
      <div class="container-fluid justify-content-end">
  
  
          <div class="btn-group ">
              <a class="btn btn-ligth nav-link btn-sm btn-link" href="registration_form.html"><img class="top-img" src="./media/registro.png" alt="imagen-registro"><span class="top-txt">Registro</span></a>
              <a class="btn btn-ligth nav-link btn-sm btn-link" href="form_ingreso.html"><img class="top-img" src="./media/login.png" alt="imagen-login"><span class="top-txt">Iniciar Sesión</span></a>
          
          </div>
      </div>
  </nav>
  </section>
  <section id="navegacion">
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark menu">
      <div class="container-fluid justify-content-between">
          <a  class="navbar-brand" href="index.html">
        <img id="logo" src="./media/logo.png" alt="Logo TecnoXpress"><span class="texto-logo">TecnoXpress</span>
      </a> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="collapsibleNavbar">
              <ul class="navbar-nav alinear">
                  <li class="nav-item">
                      <a class="nav-link active" href="index.html">Inicio</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="nosotros.html">Nosotros</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="productos.html">Productos</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="contact.html">Contacto</a>
                  </li>
                  <form class="d-flex buscar-nav">
                      <input class="form-control me-2 btn-sm" type="text" placeholder="Buscar">
                      <img class="btn btn-secondary btn-sm top-img btn-buscar-nav" src="./media/search.png" alt="Buscar...">
                  </form>
  
              </ul>
          </div>
      </div>
  </nav>
  </section>
  `;
  
      containerNav.innerHTML = htmlToInsert;
    }
  });
