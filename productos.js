//Variables y constantes
const carrito = [];
let contProteinas = document.getElementById('misProteinas');
let contCreatinas = document.getElementById('misCreatinas');
let contVasos = document.getElementById('misVasos');
let contBarritas = document.getElementById('misBarritas');

//Objetos de Productos
class Productos {
    constructor(categoria, nombre, foto, precio, id){
        this.categoria = categoria;
        this.nombre = nombre;
        this.foto = foto;
        this.precio = precio;
        this.id = id;
    }
            
}

const proteina1 = new Productos ('Proteina', 'Whey Protein Hardcore x4', '../images/prote1.png', 8600, 101);
const proteina2 = new Productos ('Proteina', 'Whey Protein Gold Nutrition', '../images/prote2.png', 5200, 102);
const proteina3 = new Productos ('Proteina', 'Whey Protein 30g Scientific Body', '../images/prote3.png', 20400, 103);
const proteina4 = new Productos ('Proteina', 'Mammut Whey Protein Black', '../images/prote4.png', 21600, 104);
const proteina5 = new Productos ('Proteina', 'Whey Protein Evlution Nutrition', '../images/prote5.png',  8200, 105);
const proteina6 = new Productos ('Proteina', 'Whey Protein Gold Nutrition x3', '../images/prote6.png', 12500, 106);
const proteina7 = new Productos ('Proteina', 'ENA Whey Protein', '../images/prote7.png', 8600, 107);
const proteina8 = new Productos ('Proteina', 'ENA Whey Protein Double Rich', '../images/prote8.png', 4500, 108)
const creatina1 = new Productos ('Creatina', 'Creatina Monohidrato Gentech', '../images/creatina2.png', 9100, 109);
const creatina2 = new Productos ('Creatina', 'Creatina Monohidrato Ultra Tech', '../images/creatina3.png', 10300, 110);
const creatina3 = new Productos ('Creatina', 'Creatina Pulver Monohidratada', '../images/creatina4.png', 8100, 111);
const creatina4 = new Productos ('Creatina', 'Creatina Star Nutrition Monohidrato', '../images/creatina1.png', 10200, 112);
const vasos1 = new Productos ('Vasos mezcladores', 'Shaker Proteína Met-rx x5', '../images/shaker1.png', 9000, 113);
const vasos2 = new Productos ('Vasos mezcladores', 'Shaker Proteína KICHLY', '../images/shaker2.png', 4500, 114);
const vasos3 = new Productos ('Vasos mezcladores', 'Shaker Proteína Neon', '../images/shaker3.png', 2000, 115);
const vasos4 = new Productos ('Vasos mezcladores', 'Shaker Proteína Negro', '../images/shaker4.png', 1000, 116);
const barras1 = new Productos ('Barras protéicas', 'Barra proteica IRONBAR chocolate', '../images/barraProte1.png', 350, 117);
const barras2 = new Productos ('Barras protéicas', 'Barra proteica ENA frutilla', '../images/barraProte2.png', 350, 118);
const barras3 = new Productos ('Barras protéicas', 'Barra proteica ENA chocolate', '../images/barraProte3.png', 350, 119);
const barras4 = new Productos ('Barras protéicas', 'Barra proteica IRONBAR coco', '../images/barraProte5.png', 350, 120);


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
        recorrerProteinas();
    }) 

    const botonCreatina = document.getElementById('botonCreatina');
    botonCreatina.addEventListener('click', function(){
        recorrerCreatinas();
    })

    const botonVasos = document.getElementById('botonVasos');
    botonVasos.addEventListener('click', function(){
        recorrerVasos();
    })

    const botonBarritas = document.getElementById('botonBarritas');
    botonBarritas.addEventListener('click', function(){
        recorrerBarritas();
    })
}

//

function recorrerProteinas (){
    for(const prote of proteinas){
        contProteinas.innerHTML += `
        <div class="card col-xl-4 tarjeta" style="width: 25%;">
            <img src=${prote.foto} class="card-img-top producto" alt="${prote.nombre}">
            <div class="card-body info">
                <h5 class="card-title">${prote.nombre}</h5>
                <p class="card-text">$ ${prote.precio}</p>
                <button id='btn${prote.id}' class="btn btn-dark boton">Agregar al carrito</button>
            </div>
        </div>
        `;
    }
    proteinas.forEach(prote => {
    document.getElementById(`btn${prote.id}`).addEventListener('click',function(){
        agregarAlCarrito(prote);
        })
    })
}



function recorrerCreatinas (){
    for(const crea of creatinas){
        contCreatinas.innerHTML += `
        <div class="card col-xl-4 tarjeta" style="width: 25%;">
            <img src=${crea.foto} class="card-img-top producto" alt="${crea.nombre}">
            <div class="card-body info">
                <h5 class="card-title">${crea.nombre}</h5>
                <p class="card-text">$ ${crea.precio}</p>
                <button id='btn${crea.id}' class="btn btn-dark boton">Agregar al carrito</button>
            </div>
        </div>
        `;
    }
    creatinas.forEach(crea => {
    document.getElementById(`btn${crea.id}`).addEventListener('click',function(){
        agregarAlCarrito(crea);
        })
    })
}

function recorrerVasos (){
    for(const vaso of vasos){
        contVasos.innerHTML += `
        <div class="card col-xl-4 tarjeta" style="width: 25%;">
            <img src=${vaso.foto} class="card-img-top producto" alt="${vaso.nombre}">
            <div class="card-body info">
                <h5 class="card-title">${vaso.nombre}</h5>
                <p class="card-text">$ ${vaso.precio}</p>
                <button id='btn${vaso.id}' class="btn btn-dark boton">Agregar al carrito</button>
            </div>
        </div>
        `;
    }
    vasos.forEach(vaso => {
    document.getElementById(`btn${vaso.id}`).addEventListener('click',function(){
        agregarAlCarrito(vaso);
        })
    })
}

function recorrerBarritas (){
    for(const barra of barritas){
        contBarritas.innerHTML += `
        <div class="card col-xl-4 tarjeta" style="width: 25%;">
            <img src=${barra.foto} class="card-img-top producto" alt="${barra.nombre}">
            <div class="card-body info">
                <h5 class="card-title">${barra.nombre}</h5>
                <p class="card-text">$ ${barra.precio}</p>
                <button id='btn${barra.id}' class="btn btn-dark boton">Agregar al carrito</button>
            </div>
        </div>
        `;
    }
    barritas.forEach(barra => {
    document.getElementById(`btn${barra.id}`).addEventListener('click',function(){
        agregarAlCarrito(barra);
        })
    })
}



function agregarAlCarrito(prodAgregado){
    carrito.push (prodAgregado);
    console.table(carrito)
    alert(prodAgregado.nombre+' agregado al carrito');
    document.getElementById("tablaCarro").innerHTML += `
    <tr>
        <td>${prodAgregado.nombre}</td>
        <td>${prodAgregado.precio}</td>
    </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador + producto.precio,0);
    let infoTotal = document.getElementById('total');
    infoTotal.innerText='Total a pagar $: '+totalCarrito;
}











