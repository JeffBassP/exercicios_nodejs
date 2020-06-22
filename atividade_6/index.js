let rs = require('readline-sync');

// ## Faça o código ##
let nome = rs.question('Digite seu nome:');
let palavra = rs.question('Digite uma palavra ou frase: ')
palavra = String(palavra);
let letras = 0

while (letras < palavra.length)
{
    letras++;
}



console.log('A palavra/frase "'+ palavra + '", Tem '+ letras+ ' letras.');