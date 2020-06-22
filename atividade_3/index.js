// ## Importe a biblioteca ##
let rs = require('readline-sync');



// ## Faça o código ##
    let altura = rs.question('Qual e a altura do quadrado? ');
    let largura = rs.question('Qual e a largura do quadrado? ');
    let uni_medidora = rs.question('Qual e a unidade medidora? (CM ou METROS)');
    let area = altura * largura;

    if(uni_medidora == 'CM' || uni_medidora == 'cm')
    {
        area = area + ' Centimetros';
        console.log('Area: '+area);
    }

else if (uni_medidora == 'METROS' || uni_medidora == 'metros')
    {
        area = area + ' Metros';
        console.log('Area: '+area);
    }

    else
   { console.log('CM OU METROS!!');
}
    




