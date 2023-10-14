
const contenedorDeProductos = document.querySelector("#contenedor-de-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar")

function cargarProductos(productosElegidos){
    contenedorDeProductos.innerHTML="";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div"); 
        div.classList.add("productos");
        div.innerHTML=`
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.imagen}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.nombre}</h3>
            <div class="producto-estilo-categoria">
                <p class="tit-cat"> Categoria:<span class="nombre-categoria">${producto.categoria.nombre}</span></p>
            </div>
            <p class="producto-precio">$ ${producto.precio}</p>
            <div class="producto-botones">
                <button class="producto-ver-info mi-boton-tt"  title="Ver más .." id="${producto.id_productos}"><i class="bi bi-eye"></i></i></button>
                <button class="producto-agregar mi-boton-tt" title="Agregar al Carrito" id="${producto.id_productos}"><i class="bi bi-cart-plus"></i></button>
            </div>
         </div>
        `;
        contenedorDeProductos.append(div);
    })

    actualizarBotonesAgregar();
}
//crea una variable div y la asigna a un elem html div

// Alt + 96 comilla francesa para template string

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id_categoria_productos === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id_categoria_productos === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
 });

 function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    //botonesAgregar queda como un array que tiene asignado todos los elementos con la clase producto-agregar
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
    //recorre 
 }
 const productosEnCarrito=[];
 function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id_productos === idBoton);
    if (productosEnCarrito.some(producto => producto.id_productos === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id_productos === idBoton);
        productosEnCarrito[index].cantidad++;
    }else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    

 }