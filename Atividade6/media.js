alert("Isso é uma calculadora de média");

let nome = prompt("Digite o seu nome: ");

let n1 = parseFloat(prompt("Digite a nota1: "));

let n2 = parseFloat(prompt("Digite a nota2: "));

let n3 = parseFloat(prompt("Digite a nota3: "));

let n4 = parseFloat(prompt("Digite a nota4: "));


let media = (n1 + n2 + n3 + n4) / 4;
media = media.toFixed(2);

alert("Seu nome é: " + nome + "\nSua média é de: " + media);