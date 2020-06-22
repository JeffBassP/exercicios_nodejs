// ## Importe a biblioteca ##
let rs = require('readline-sync');
// ## Faça o código ##
let nome = rs.question('Ola! Qual e o seu nome? ');
let voo = rs.question('Ola Sr. ' + nome + ' Qual é o seu voo? ');
let fileira = rs.question('Voo: ' + voo + '. Qual fileira voce deseja sentar? (A, B, C, D, E ou F) ');

if (fileira == 'a' || fileira == 'b' || fileira == 'c' || fileira == 'd' || fileira == 'e' || fileira == 'f') {
    console.log('Seu voo e: ' + voo + ' Fileira: ' + fileira + '. ');

    console.log('Obrigado por viajar com a nossa companhia!');
} else
{
    console.log('Informacao incorreta');
}