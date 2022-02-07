// const precioOriginal = parseInt(prompt("Ingrese un valor: "));
// const descuento = parseInt(prompt("Ingrese el descuento: "));;
const formulario = document.querySelector('.formulario');

function precioFinal(precio,descuento){
    const descuentoFin = 100 - descuento
    return total = precio * (0.01 * descuentoFin);
}

priceFinal = () =>{
    
    const input1 = document.getElementById('Precio');
    const precios = parseInt(input1.value);

    const input2 = document.getElementById('Descuento');
    const descuento = parseInt(input2.value);
    
    const precioConDescuento = precioFinal(precios,descuento);
    
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    resultP.classList.add('nuevoElemento')

    // const elemento = document.createElement('P');
    // elemento.textContent = `El precio es de: $${precioConDescuento}`;
    // elemento.classList.add('nuevoElemento');

    // formulario.appendChild(elemento);

    // if(priceFinal() == precioConDescuento.value){
    //     formulario.removeChild(elemento);
    // }
    
}