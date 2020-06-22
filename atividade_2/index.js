// ## Importe a biblioteca ##

let rs = require('readline-sync');

// ## Faça o código ##
console.log('Centro de prevencao ao COVID-19');
let mascara = rs.question('Ola, voce esta usando mascara quando precisa sair de casa? (SIM | NAO)');
let maos = rs.question('Tem lavado as maos frequentemente? (SIM | NAO)');

if (mascara == 'sim' && maos == 'sim')
console.log('Meus Parabens, voce esta ajudando a combater essa pandemia!!');
else
{ 
    console.log('Preste mais atencao nas normas de seguranca!! Poupe sua familia!!');
}
  
