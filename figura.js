//Código del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado miden: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El perímetro del cuadrado miden: ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del triangulo
console.group('Triángulos');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const alturaTriangulo = 5.5;
console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${ladoTriangulo3}cm`);
console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log(`El perimetro del triángulo es de: ${perimetroTriangulo}cm`);

const areaTriangulo = ((ladoTriangulo3 * alturaTriangulo) / 2);
console.log(`El área del triangulo es de: ${areaTriangulo}cm^2`);
console.groupEnd();


//Código del circulo
console.group('Circulos');
//Rádio
const radio = 4;
console.log(`El radio del circulo es: ${radio}cm`);
//Diámetro
const diametro = radio * 2;
console.log(`El diametro del circulo es: ${diametro}cm`);
//PI
const PI = Math.PI;
console.log(`Pi es igual a: ${PI}`);
//Circunferencia
const perimetroCirculo = diametro * PI;
console.log(`El perimetro del circulo es: ${perimetroCirculo}`);
//Área
const areaCirculo = (radio * radio) * PI;
console.log(`El área del circulo es: ${areaCirculo}`);
console.groupEnd();