let numberOne = Number(prompt("Digite o primeiro numero: "));
let numberTwo = Number(prompt("Digite o segundo numero: "));

let sun = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;
let rest = numberOne % numberTwo;

alert(`A soma dos dois numeros é: ${sun}`);
alert(`A subtração dos dois numeros é: ${subtraction}`);
alert(`A multiplicação dos dois numeros é: ${multiplication}`);
alert(`A divisão dos dois numeros é: ${division}`);
alert(`O resto da divisão dos dois numeros é: ${rest}`);

if((sun) % 2 == 0  ){
    alert(`A soma dos dois numeros é par: ${sun}`)
} else {
    alert(`A soma dos dois numeros é impar: ${sun}`)
}

if(numberOne !== numberTwo){
    alert(`Os numeros inseridos são diferentes!`)
} else {
    alert(`Os numeros inseridos são iguais!`)
}