//Variables y constantes
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let cont = document.getElementById('misProductos');
const tablaCarro = document.getElementById('tablaCarro');
const botonFinalizar = document.getElementById('btnFinalizarCompra');

//Objetos de Productos
class Productos {
    constructor(categoria, nombre, foto, precio, id, cantidad){
        this.categoria = categoria;
        this.nombre = nombre;
        this.foto = foto;
        this.precio = precio;
        this.id = id;
        this.cantidad = cantidad;
    }
            
}

const proteina1 = new Productos ('Proteina', 'Whey Protein Hardcore x4', '../images/prote1.png', 8600, 101, 0);
const proteina2 = new Productos ('Proteina', 'Whey Protein Gold Nutrition', '../images/prote2.png', 5200, 102, 0);
const proteina3 = new Productos ('Proteina', 'Whey Protein 30g Scientific Body', '../images/prote3.png', 20400, 103, 0);
const proteina4 = new Productos ('Proteina', 'Mammut Whey Protein Black', '../images/prote4.png', 21600, 104, 0);
const proteina5 = new Productos ('Proteina', 'Whey Protein Evlution Nutrition', '../images/prote5.png',  8200, 105, 0);
const proteina6 = new Productos ('Proteina', 'Whey Protein Gold Nutrition x3', '../images/prote6.png', 12500, 106, 0);
const proteina7 = new Productos ('Proteina', 'ENA Whey Protein', '../images/prote7.png', 8600, 107, 0);
const proteina8 = new Productos ('Proteina', 'ENA Whey Protein Double Rich', '../images/prote8.png', 4500, 108, 0)
const creatina1 = new Productos ('Creatina', 'Creatina Monohidrato Gentech', '../images/creatina2.png', 9100, 109, 0);
const creatina2 = new Productos ('Creatina', 'Creatina Monohidrato Ultra Tech', '../images/creatina3.png', 10300, 110, 0);
const creatina3 = new Productos ('Creatina', 'Creatina Pulver Monohidratada', '../images/creatina4.png', 8100, 111, 0);
const creatina4 = new Productos ('Creatina', 'Creatina Star Nutrition Monohidrato', '../images/creatina1.png', 10200, 112, 0);
const vasos1 = new Productos ('Vasos mezcladores', 'Shaker Proteína Met-rx x5', '../images/shaker1.png', 9000, 113, 0);
const vasos2 = new Productos ('Vasos mezcladores', 'Shaker Proteína KICHLY', '../images/shaker2.png', 4500, 114, 0);
const vasos3 = new Productos ('Vasos mezcladores', 'Shaker Proteína Neon', '../images/shaker3.png', 2000, 115, 0);
const vasos4 = new Productos ('Vasos mezcladores', 'Shaker Proteína Negro', '../images/shaker4.png', 1000, 116, 0);
const barras1 = new Productos ('Barras protéicas', 'Barra proteica IRONBAR chocolate', '../images/barraProte1.png', 350, 117, 0);
const barras2 = new Productos ('Barras protéicas', 'Barra proteica ENA frutilla', '../images/barraProte2.png', 350, 118, 0);
const barras3 = new Productos ('Barras protéicas', 'Barra proteica ENA chocolate', '../images/barraProte3.png', 350, 119, 0);
const barras4 = new Productos ('Barras protéicas', 'Barra proteica IRONBAR coco', '../images/barraProte5.png', 350, 120, 0);


//Array de productos 
const listaProd = [proteina1, proteina2, proteina3, proteina4, proteina5, proteina6, proteina7, proteina8, creatina1, creatina2, creatina3, creatina4, vasos1, vasos2, vasos3, vasos4, barras1, barras2, barras3, barras4];

//Filtrar productos
const proteinas = listaProd.filter((prod)=>prod.categoria.includes('Proteina'));
const creatinas =  listaProd.filter((prod)=>prod.categoria.includes('Creatina'));
const vasos = listaProd.filter((prod)=>prod.categoria.includes('Vasos'));
const barritas = listaProd.filter((prod)=>prod.categoria.includes('Barras'));

for(let i = 0; i < 1; i++){
    const botonProteina = document.getElementById('botonProteina');
    botonProteina.addEventListener('click', function(){
        renderizarProductos(proteinas);
    }) 

    const botonCreatina = document.getElementById('botonCreatina');
    botonCreatina.addEventListener('click', function(){
        renderizarProductos(creatinas);
    })

    const botonVasos = document.getElementById('botonVasos');
    botonVasos.addEventListener('click', function(){
        renderizarProductos(vasos);
    })

    const botonBarritas = document.getElementById('botonBarritas');
    botonBarritas.addEventListener('click', function(){
        renderizarProductos(barritas);
    })
}

//Funcion Recorrer Productos
function renderizarProductos (eleccionUsuario){
    cont.innerHTML = " ";
    for(const el of eleccionUsuario){
        cont.innerHTML += `
        <div class="card col-xl-4 tarjeta" style="width: 25%;">
            <img src=${el.foto} class="card-img-top producto" alt="${el.nombre}">
            <div class="card-body info">
                <h5 class="card-title">${el.nombre}</h5>
                <p class="card-text">$ ${el.precio}</p>
                <button id='btn${el.id}' class="btn btn-dark boton">Agregar al carrito</button>
            </div>
        </div>
        `;
    }
    eleccionUsuario.forEach(el => {
    document.getElementById(`btn${el.id}`).addEventListener('click',function(){
        agregarAlCarrito(el);
        })
    })
}

//Funcion Agregar al Carrito
function agregarAlCarrito(prodAgregado){
    carrito.push (prodAgregado);
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
                <td>${prodAgregado.cantidad}</td>
                <td><button onclick = "eliminarDelCarrito(${prodAgregado.id})" type="button" class="btn btn-danger">X</button></td>
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
const eliminarDelCarrito = (id) => {
    const producto = carrito.find((prodAgregado) => prodAgregado.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    renderizarCarrito();
  };