// Mouse
const productos = [
    // 
    {
        id_productos: "01",
        nombre: "Mouse 01",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/mouse/01.jpg",
        categoria: {
            nombre: "Mouses",
            id_categoria_productos: "01"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "02",
        nombre: "Mouse 02",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/mouse/02.jpg",
        categoria: {
            nombre: "Mouses",
            id_categoria_productos: "01"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "03",
        nombre: "Mouse 03",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/mouse/03.jpg",
        categoria: {
            nombre: "Mouses",
            id_categoria_productos: "01"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "04",
        nombre: "Mouse 04",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/mouse/04.jpg",
        categoria: {
            nombre: "Mouses",
            id_categoria_productos: "01"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "05",
        nombre: "Mouse 05",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/mouse/05.jpg",
        categoria: {
            nombre: "Mouses",
            id_categoria_productos: "01"
        },
        precio: 1000,
        stock: 15
    },
    // Monitores
    {
        id_productos: "06",
        nombre: "Monitores 01",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/monitores/01.jpg",
        categoria: {
            nombre: "Monitores",
            id_categoria_productos: "02"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "07",
        nombre: "Monitores 02",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/monitores/02.jpg",
        categoria: {
            nombre: "Monitores",
            id_categoria_productos: "02"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "08",
        nombre: "Monitores 03",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/monitores/03.jpg",
        categoria: {
            nombre: "Monitores",
            id_categoria_productos: "02"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "09",
        nombre: "Monitores 04",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/monitores/04.jpg",
        categoria: {
            nombre: "Monitores",
            id_categoria_productos: "02"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "10",
        nombre: "Monitores 05",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/monitores/05.jpg",
        categoria: {
            nombre: "Monitores",
            id_categoria_productos: "02"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "11",
        nombre: "Monitores 06",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/monitores/06.jpg",
        categoria: {
            nombre: "Monitores",
            id_categoria_productos: "02"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "12",
        nombre: "Monitores 07",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/monitores/07.jpg",
        categoria: {
            nombre: "Monitores",
            id_categoria_productos: "02"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "13",
        nombre: "Monitores 08",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/monitores/08.jpg",
        categoria: {
            nombre: "Monitores",
            id_categoria_productos: "02"
        },
        precio: 1000,
        stock: 15
    },
    // Teclados
    {
        id_productos: "14",
        nombre: "Teclado 01",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/teclados/01.jpg",
        categoria: {
            nombre: "Teclados",
            id_categoria_productos: "03"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "15",
        nombre: "Teclado 02",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/teclados/01.jpg",
        categoria: {
            nombre: "Teclados",
            id_categoria_productos: "03"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "16",
        nombre: "Teclado 03",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/teclados/03.jpg",
        categoria: {
            nombre: "Teclados",
            id_categoria_productos: "03"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "17",
        nombre: "Teclado 04",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/teclados/04.jpg",
        categoria: {
            nombre: "Teclados",
            id_categoria_productos: "03"
        },
        precio: 1000,
        stock: 15
    },
    {
        id_productos: "18",
        nombre: "Teclado 05",
        descripcion: "texto desscripcion del producto, texto desscripcion del producto, texto desscripcion del producto.",
        imagen: "./media/teclados/05.jpg",
        categoria: {
            nombre: "Teclados",
            id_categoria_productos: "03"
        },
        precio: 1000,
        stock: 15
    }
];

const contenedorDeProductos = document.querySelector("#contenedor-de-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

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
                <button class="producto-agregar mi-boton-tt"  title="Ver más .." id="${producto.id_productos}"><i class="bi bi-eye"></i></i></button>
                <button class="producto-agregar mi-boton-tt" title="Agregar al Carrito" id="${producto.id_productos}"><i class="bi bi-cart-plus"></i></button>
            </div>
         </div>
        `;
        contenedorDeProductos.append(div);
    })
}
//crea una variable div y la asigna a un elem html div

// Alt + 96 comilla francesa para template string


/* <img class="producto-imagen" src="./media/TecladoNoganet_1.webp" alt="Teclado Noganet1">
<div class="producto-detalles">
    <h3 class="producto-titulo">Teclado 01</h3>
    <p class="producto-precio">$ 2.000</p>
    <button class="producto-agregar">Agregar al Carrito<i class="bi bi-cart-plus"></i></button>
 </div> */

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
