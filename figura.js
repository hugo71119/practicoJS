//Código del cuadrado
console.group('Cuadrados');
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log(`El perímetro del cuadrado miden: ${perimetroCuadrado}cm`);

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`El perímetro del cuadrado miden: ${areaCuadrado}cm^2`);
perimetroLado = lado => {
    return lado * 4;
};
let x = prompt("Lado del cuadrado: ");
console.log( `El perimetro es de: ${perimetroLado(x)}cm`)

areaCuadrado = lado =>{
    return lado * lado;
}
console.log( `El área es de: ${areaCuadrado(x)}cm^2`)


console.groupEnd();

//Código del triangulo
console.group('Triángulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoTriangulo3 = 4;
// const alturaTriangulo = 5.5;
// console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${ladoTriangulo3}cm`);
// console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
// console.log(`El perimetro del triángulo es de: ${perimetroTriangulo}cm`);

// const areaTriangulo = ((ladoTriangulo3 * alturaTriangulo) / 2);
// console.log(`El área del triangulo es de: ${areaTriangulo}cm^2`);
perimetroTriangulo = (l1,l2,b) =>{
    return perimetro = l1 + l2 + b;
}
areaTriangulo = (h,b) =>{
    return area = (b * h) / 2;
}

let t1 = parseInt(prompt("Valor del primer lado: "));
let t2 = parseInt(prompt("Valor del segundo lado: "));
let tb = parseInt(prompt("Valor de la base: "));
let h = parseFloat(prompt("Valor de la altura: "));
console.log(`El perimetro del triangulo es: ${perimetroTriangulo(t1,t2,tb)}cm`);
console.log(`El área del triangulo es: ${areaTriangulo(h,tb)}cm^2`);

console.groupEnd();


//Código del circulo
console.group('Circulos');
// //Rádio
// const radio = 4;
// console.log(`El radio del circulo es: ${radio}cm`);
// //Diámetro
// const diametro = radio * 2;
// console.log(`El diametro del circulo es: ${diametro}cm`);
// //PI
// const PI = Math.PI;
// console.log(`Pi es igual a: ${PI}`);
// //Circunferencia
// const perimetroCirculo = diametro * PI;
// console.log(`El perimetro del circulo es: ${perimetroCirculo}`);
// //Área
// const areaCirculo = (radio * radio) * PI;
// console.log(`El área del circulo es: ${areaCirculo}`);

let radio = parseFloat(prompt("Valor del radio: "));
const Pi = Math.PI;

diametro = radio =>{
    return diametro = radio * 2;
}
circunferencia = (diametro, pi) =>{
    return perimetro = diametro * pi;
}
areaCirculo = (radio, pi) =>{
    return area = (radio * radio) * pi;
}

console.log(`La circunferencia es de: ${circunferencia(diametro(radio),Pi)}cm`);
console.log(`El área es de: ${areaCirculo(radio,Pi)}cm^2`);

console.groupEnd();