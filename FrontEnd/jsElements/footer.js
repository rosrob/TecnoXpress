document.addEventListener("DOMContentLoaded", function footerElement() {
  const containerFooter = document.getElementById("containerFooter");

  if (containerFooter) {
    const footerToInsert = `<footer class="text-center text-lg-start bg-white text-muted">
      <section class="d-flex justify-content-center p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Seguinos en nuestras redes:</span>
        </div>

        <div class="redesLinks">
          <a href="https://www.facebook.com/" target="_blank" class="me-4">
            <i class="fa fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" class="me-4">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" class="me-4">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/" target="_blank" class="me-4">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </section>

      <section class="links">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3 text-secondary"></i>TecnoXpress
              </h6>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Medios de pagos</h6>
              <p class="payMedia">
                <a href="https://www.visa.com/" target="_blank"
                  ><span class="vi"><i class="fa-brands fa-cc-visa"></i></span
                ></a>
              </p>
              <p class="payMedia">
                <a href="https://www.mastercard.com/" target="_blank"
                  ><span class="ms"
                    ><i class="fa-brands fa-cc-mastercard"></i></span
                ></a>
              </p>
              <p class="payMedia">
                <a href="https://www.americanexpress.com/" target="_blank"
                  ><span class="amx"><i class="fa-brands fa-cc-amex"></i></span
                ></a>
              </p>
              <p class="payMedia">
                <a href="https://www.paypal.com/" target="_blank"
                  ><span class="pay"
                    ><i class="fa-brands fa-cc-paypal"></i></span
                ></a>
              </p>
              <p class="payMedia">
                <a href="https://academy.binance.com/" target="_blank"
                  ><span class="btc"><i class="fa-brands fa-btc"></i></span
                ></a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">ATENCION AL CLIENTE</h6>
              <p>
                <i class="fas fa-home me-3 text-secondary"></i>Humberto Primo
                680
              </p>
              <p>
                <i class="fas fa-envelope me-3 text-secondary"></i
                >consultas@tecnoxpress.com.ar
              </p>
              <p>
                <i class="fas fa-phone me-3 text-secondary"></i>0810-555-8894
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center p-4 copyRights">
        <small
          >&copy; 2023 <b> TECNOXPRESS</b> - Todos los Derechos
          Reservados.</small
        >
      </div>
    </footer>
  `;

    containerFooter.innerHTML = footerToInsert;
  }
});
