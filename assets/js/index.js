const precioInicial = 400000;
let cantidad = 0;
let valorTotal = 0; 

document.querySelector ('#precio-inicial').innerHTML = precioInicial;
document.querySelector ('#cantidad').innerHTML = cantidad;
document.querySelector ('#valor-total').innerHTML = valorTotal;

function agregar (){
    cantidad = cantidad + 1;
    document.querySelector ('#cantidad').innerHTML = cantidad;
    document.querySelector ('#valor-total').innerHTML = precioInicial * cantidad;
    
}

function restar (){
    cantidad = cantidad - 1;
    document.querySelector ('#cantidad').innerHTML = cantidad;
    document.querySelector ('#valor-total').innerHTML = precioInicial * cantidad;
}