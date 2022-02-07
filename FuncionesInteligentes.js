// const precioOriginal = parseInt(prompt("Ingrese un valor: "));
// const descuento = parseInt(prompt("Ingrese el descuento: "));;
const formulario = document.querySelector('.formulario');
// const cupones = [
//     "Vic_y_ya",
//     "NOVIEMBRE2022",
//     "Nadie_Sabe",
// ];

const cupones = [
    {
        name: "Vic_y_ya",
        descuento: 10,
    },
    {
        name: "NOVIEMBRE2022",
        descuento: 25,
    },
    {
        name: "Nadie_Sabe",
        descuento: 36,
    }
]

function precioFinal(precio,descuento){
    const descuentoFin = 100 - descuento
    return total = precio * (0.01 * descuentoFin);
}

priceFinal = () =>{
    
    const input1 = document.getElementById('Precio');
    const precios = parseInt(input1.value);

    const input2 = document.getElementById('Descuento');
    const cupon = input2.value;

    // switch (cupon) {
    //     case 'Vic_y_ya':
    //         descuento = 10;
    //         break;
    //     case 'NOVIEMBRE2022':
    //         descuento = 25;
    //         break;
    //     case 'Nadie_Sabe':
    //         descuento = 36;
    //         break;
    //     default:
    //         const resultP = document.getElementById("ResultP");
    //         resultP.innerText = "Cupon invalido, intente de nuevo";
    //         resultP.classList.add('nuevoElemento')
    //         break;
    // }

    // if (!cupones.includes(cupon)) {
    //     const resultP = document.getElementById("ResultP");
    //     resultP.innerText = "Cupon invalido, intente de nuevo";
    //     resultP.classList.add('nuevoElemento')
    // }else if (cupon === 'Vic_y_ya'){
    //     descuento = 10;
    // }else if (cupon === 'NOVIEMBRE2022'){
    //     descuento = 25;
    // }else if (cupon === 'Nadie_Sabe'){
    //     descuento = 36;
    // }

    const isCouponValueValid = function (cupones){
        return cupones.name === cupon;
    }

    const userCupon = cupones.find(isCouponValueValid);
    
    if (!userCupon) {
        const resultP = document.getElementById("ResultP");
        resultP.innerText = `El cupon '${cupon}' no es valido, intenta de nuevo`;
        resultP.classList.add('nuevoElemento')
    } else {
        const descuento = userCupon.descuento;
        const precioConDescuento = precioFinal(precios,descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
        resultP.classList.add('nuevoElemento')
    }

    // const precioConDescuento = precioFinal(precios,descuento);
    
    // const resultP = document.getElementById("ResultP");
    // resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    // resultP.classList.add('nuevoElemento')

    // const elemento = document.createElement('P');
    // elemento.textContent = `El precio es de: $${precioConDescuento}`;
    // elemento.classList.add('nuevoElemento');

    // formulario.appendChild(elemento);

    // if(priceFinal() == precioConDescuento.value){
    //     formulario.removeChild(elemento);
    // }
    
}