
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
const creatina1 = new Productos ('Creatina', 'Creatina Monohidrato Gentech', '../images/creatina2.png', 9100, 108);
const creatina2 = new Productos ('Creatina', 'Creatina Monohidrato Ultra Tech', '../images/creatina3.png', 10300, 109);
const creatina3 = new Productos ('Creatina', 'Creatina Pulver Monohidratada', '../images/creatina4.png', 8100, 110);
const creatina4 = new Productos ('Creatina', 'Creatina Star Nutrition Monohidrato', '../images/creatina1.png', 10200, 111);
const vasos1 = new Productos ('Vasos mezcladores', 'Shaker Proteína Met-rx x5', '../images/shaker1.png', 9000, 112);
const vasos2 = new Productos ('Vasos mezcladores', 'Shaker Proteína KICHLY', '../images/shaker2.png', 4500, 113);
const vasos3 = new Productos ('Vasos mezcladores', 'Shaker Proteína Neon', '../images/shaker3.png', 2000, 114);
const vasos4 = new Productos ('Vasos mezcladores', 'Shaker Proteína Negro', '../images/shaker4.png', 1000, 115);
const barras1 = new Productos ('Barras protéicas', 'Barra proteica IRONBAR chocolate', '../images/barraProte1.png', 350, 116);
const barras2 = new Productos ('Barras protéicas', 'Barra proteica ENA frutilla', '../images/barraProte2.png', 350, 117);
const barras3 = new Productos ('Barras protéicas', 'Barra proteica ENA chocolate', '../images/barraProte3.png', 350, 118);
const barras4 = new Productos ('Barras protéicas', 'Barra proteica ENA banana split', '../images/barraProte4.png', 350, 119);
const barras5 = new Productos ('Barras protéicas', 'Barra proteica IRONBAR coco', '../images/barraProte5.png', 350, 120);


//Array de productos 
const listaProd = [proteina1, proteina2, proteina3, proteina4, proteina5, proteina6, proteina7, creatina1, creatina2, creatina3, creatina4, vasos1, vasos2, vasos3, vasos4, barras1, barras2, barras3, barras4, barras5 ];


let salida;
do{
    salida = prompt('Ingrese ESC para salir');
    if (salida !== 'ESC'){
        alert('Bienvenido a la tienda, ahora vea nuestros productos');
        let consulta1 = parseInt(prompt('Ingrese 1 para ver los productos o 2 para ver los precios:'));
        if(consulta1 === 1){
            listaProd.forEach((prod)=>{
            console.log(prod.categoria+' '+prod.id);
        })
        }else if(consulta1 === 2){
            listaProd.forEach((prod)=>{
            console.log(prod.nombre+' '+prod.precio);
        })
        }else{
            alert('No ha seleccionado ninguna opción');  
        }
        let consulta2 = parseInt(prompt('Ingrese 1 para ver proteinas\nIngrese 2 para ver las creatinas\nIngrese 3 para ver los shakers\nIngrese 4 para ver las barritas'));
        if(consulta2===1){
            const proteinas = listaProd.filter((prod)=>prod.categoria.includes('Proteina'));
            console.log(proteinas)
        }else if (consulta2===2){
            const creatinas =  listaProd.filter((prod)=>prod.categoria.includes('Creatina'));
            console.log(creatinas)
        }else if(consulta2===3){
            const vasos = listaProd.filter((prod)=>prod.categoria.includes('Vasos'));
            console.log(vasos)
        }else if(consulta2===4){
            const barritas = listaProd.filter((prod)=>prod.categoria.includes('Barras'));
            console.log(barritas)
        }else{
            alert('No ha seleccionado ninguna opción');  
        }
        
    }
}while(salida !== 'ESC')












