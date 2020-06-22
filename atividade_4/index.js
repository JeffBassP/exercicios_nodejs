// ## Importe a biblioteca ##
let rs = require('readline-sync');

// ## Faça o código ##
console.log('Descobridor de signo');
let dia = rs.question('QUal o dia de seu nascimento? ');
let mes = rs.question('Qual e o mes? ');

dia = Number(dia);
mes = Number(mes);

switch (mes) {
    case 1:
        if (dia <= 20) {
            console.log('Seu signo e de Capricornio');
        } else
            console.log('Seu signo é de Aquario');
        break;
    case 2:
        if (dia <= 19) {
            console.log('Seu signo e aquario');
        } else
            console.log('Seu signo é de peixes');
        break;
    case 3:
        if (dia <= 20) {
            console.log('Seu signo e peixes');
        } else
            console.log('Seu signo é de Aries');
        break;
    case 4:
        if (dia <= 20) {
            console.log('Seu signo e de Aries');
        } else
            console.log('Seu signo é de Touro');
        break;
    case 5:
        if (dia <= 20) {
            console.log('Seu signo e Touro');
        } else
            console.log('Seu signo é de Gemeos');
        break;
    case 6:
        if (dia <= 20) {
            console.log('Seu signo e Gemeos');
        } else
            console.log('Seu signo é de Cancer');
        break;
    case 7:
        if (dia <= 22) {
            console.log('Seu signo e de Cancer');
        } else
            console.log('Seu signo é de Leao');
        break;
    case 8:
        if (dia <= 22) {
            console.log('Seu signo e Leao');
        } else
            console.log('Seu signo é de Virgem');
        break;
    case 9:
        if (dia <= 22) {
            console.log('Seu signo e Virgem');
        } else
            console.log('Seu signo é de Libra');
        break;
    case 10:
        if (dia <= 22) {
            console.log('Seu signo e de Libra');
        } else
            console.log('Seu signo é de Escorpiao');
        break;
    case 11:
        if (dia <= 21) {
            console.log('Seu signo e Escorpiao');
        } else
            console.log('Seu signo é de Sagitario');
        break;
    case 12:
        if (dia <= 21) {
            console.log('Seu signo e Sagitario');
        } else
            console.log('Seu signo é de Capricornio');
        break;


}