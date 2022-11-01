//Variables y constantes
const carrito = [];
let cont = document.getElementById('misProductos');
const tablaCarro = document.getElementById('tablaCarro');

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

const proteina1 = new Productos ('Proteina', 'Whey Protein Hardcore x4', '../images/prote1.png', 8600, 101, 1);
const proteina2 = new Productos ('Proteina', 'Whey Protein Gold Nutrition', '../images/prote2.png', 5200, 102, 1);
const proteina3 = new Productos ('Proteina', 'Whey Protein 30g Scientific Body', '../images/prote3.png', 20400, 103, 1);
const proteina4 = new Productos ('Proteina', 'Mammut Whey Protein Black', '../images/prote4.png', 21600, 104, 1);
const proteina5 = new Productos ('Proteina', 'Whey Protein Evlution Nutrition', '../images/prote5.png',  8200, 105, 1);
const proteina6 = new Productos ('Proteina', 'Whey Protein Gold Nutrition x3', '../images/prote6.png', 12500, 106, 1);
const proteina7 = new Productos ('Proteina', 'ENA Whey Protein', '../images/prote7.png', 8600, 107, 1);
const proteina8 = new Productos ('Proteina', 'ENA Whey Protein Double Rich', '../images/prote8.png', 4500, 108, 1)
const creatina1 = new Productos ('Creatina', 'Creatina Monohidrato Gentech', '../images/creatina2.png', 9100, 109, 1);
const creatina2 = new Productos ('Creatina', 'Creatina Monohidrato Ultra Tech', '../images/creatina3.png', 10300, 110, 1);
const creatina3 = new Productos ('Creatina', 'Creatina Pulver Monohidratada', '../images/creatina4.png', 8100, 111, 1);
const creatina4 = new Productos ('Creatina', 'Creatina Star Nutrition Monohidrato', '../images/creatina1.png', 10200, 112, 1);
const vasos1 = new Productos ('Vasos mezcladores', 'Shaker Proteína Met-rx x5', '../images/shaker1.png', 9000, 113, 1);
const vasos2 = new Productos ('Vasos mezcladores', 'Shaker Proteína KICHLY', '../images/shaker2.png', 4500, 114, 1);
const vasos3 = new Productos ('Vasos mezcladores', 'Shaker Proteína Neon', '../images/shaker3.png', 2000, 115, 1);
const vasos4 = new Productos ('Vasos mezcladores', 'Shaker Proteína Negro', '../images/shaker4.png', 1000, 116, 1);
const barras1 = new Productos ('Barras protéicas', 'Barra proteica IRONBAR chocolate', '../images/barraProte1.png', 350, 117, 1);
const barras2 = new Productos ('Barras protéicas', 'Barra proteica ENA frutilla', '../images/barraProte2.png', 350, 118, 1);
const barras3 = new Productos ('Barras protéicas', 'Barra proteica ENA chocolate', '../images/barraProte3.png', 350, 119, 1);
const barras4 = new Productos ('Barras protéicas', 'Barra proteica IRONBAR coco', '../images/barraProte5.png', 350, 120, 1);


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
    añadirLS();
    renderizarCarrito();
    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador + producto.precio,0);
    let infoTotal = document.getElementById('total');
    infoTotal.innerText='Total a pagar $: '+totalCarrito;
}

function renderizarCarrito(){
    tablaCarro.innerHTML = '';
    carrito.map(prodAgregado => {
        const tprod = document.createElement('tr')
        const content = `
            <tr>
                <th scope="row">${prodAgregado.categoria}</th>
                <td>${prodAgregado.nombre}</td>
                <td>${prodAgregado.precio}</td>
                <td id="tdCantidad">${prodAgregado.cantidad}</td>
            </tr>
    `;
        tprod.innerHTML = content;
        tablaCarro.append(tprod);
    })
}

function añadirLS(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
if(carritoGuardado){
    carrito=carritoGuardado;
    renderizarCarrito();
}






















