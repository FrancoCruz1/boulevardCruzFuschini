//Variables y constantes
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let cont = document.getElementById('misProductos');
const tablaCarro = document.getElementById('tablaCarro');
const botonFinalizar = document.getElementById('btnFinalizarCompra');
const listaProd = [];


//Funcion Recorrer Productos
function renderizarProductos (){
    for(const producto of listaProd){
        cont.innerHTML += `
        <div class="card col-xl-4 tarjeta" style="width: 25%;">
            <img src=${producto.foto} class="card-img-top producto" alt="${producto.nombre}">
            <div class="card-body info">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$ ${producto.precio}</p>
                <button id='btn${producto.id}' class="btn btn-dark boton">Agregar al carrito</button>
            </div>
        </div>
        `;
    }
    listaProd.forEach(producto => {
    document.getElementById(`btn${producto.id}`).addEventListener('click',function(){
        agregarAlCarrito(producto);
        })
    })
}

//Funcion Agregar al Carrito
function agregarAlCarrito(prodAgregado){
    carrito.push (prodAgregado);
    console.table(carrito);
    Swal.fire({
        title: prodAgregado.nombre,
        text: 'Añadido al carrito',
        imageUrl: prodAgregado.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: prodAgregado.nombre,
        showConfirmButton: false,
        timer: 1250
      })
        añadirLS();
        renderizarCarrito();
}

function totalCarrito(){
    totalCarro = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarro;
  }
renderizarCarrito();

//Funcion que recorre el carrito
function renderizarCarrito(){
    console.table(carrito);
    let tabla = '';
    carrito.forEach((prodAgregado) => {
      tabla = tabla +
        `
            <tr>
                <th scope="row">${prodAgregado.categoria}</th>
                <td>${prodAgregado.nombre}</td>
                <td>${prodAgregado.precio}</td>
                <td><button onclick="eliminarDelCarrito(event)" type="button" class="btn btn-danger">X</button></td>
            </tr>
        `;
        tablaCarro.innerHTML = tabla;
        totalCarrito();
    })
}

//Finalizar Compra
botonFinalizar.onclick = () => {
    if(carrito.length==0){
        Swal.fire({
            title: 'Carrito vacio',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        carrito.splice(0, carrito.length);
        console.log(carrito);
        tablaCarro.innerHTML='';
    }
}

//Funcion para agregar al Storage
function añadirLS(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
if(carritoGuardado){
    carrito=carritoGuardado;
    renderizarCarrito();
}

//Funcion para eliminar del carrito
function eliminarDelCarrito(ev){
    console.log(ev);
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);
    let id = fila.children[0].innerText;
    console.log(id);
    let indice = carrito.findIndex(producto => producto.id === id);
    console.log(indice);
    //elimina producto del carro
    carrito.splice(indice,1);
    console.table(carrito);
    //elimina la fila
    fila.remove();
    //recalcular total
    let precios = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    total.innerText='Total a pagar: $ '+precios;
    //storage
    localStorage.setItem('carrito',JSON.stringify(carrito));
}

//GETJSON de productos
async function obtenerJSON(){
    const URLJSON="data.json"
    const resp=await fetch(URLJSON)
    const data=await resp.json()
    listaProd = data;
    renderizarProductos();
}
