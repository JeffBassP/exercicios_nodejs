let rs = require('readline-sync');

// ## Faça o código ##
let nome1 = rs.question('NOME 1 - Digite seu nome: ');
let palavra1 = rs.question('PALAVRA 1 - Digite uma palavra ou frase: ')
let nome2 = rs.question('NOME 2 - Digite seu nome: ');
let palavra2 = rs.question('PALAVRA 2 - Digite uma palavra ou frase: ')
palavra1 = String(palavra1);
palavra2 = String(palavra2);
let letras1 = palavra1.length;
let letras2 = palavra2.length;

if (letras1 > letras2)
{
    console.log( nome1+ ' usou '+ letras1+ ' letras na palavra '+ palavra1+'.');
    console.log( nome2+ ' usou '+ letras2+ ' letras na palavra '+ palavra2+'.');
    console.log( nome1+ ' venceu!!')
    
}
else 
{
    console.log(nome1+ ' usou '+ letras1+ ' letras na palavra '+ palavra1+'.');
    console.log(nome2+ ' usou '+ letras2+ ' letras na palavra '+ palavra2+'.');
    console.log(nome2+ ' venceu!!')
}
