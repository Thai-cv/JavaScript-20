var numArray = [8,11,29,35,92,10,1,2000,39,42]
var maiorindice = 0;
var menorindice = 9999;

for (let i = 0; i < numArray.length; i++) {
    var element = numArray[i];

    if (element > maiorindice) {
        maiorindice = element
    }

    if (element < menorindice) {
        menorindice = element
    }
}

console.log (`Maior Índice: ${maiorindice} \nMenor Índice: ${menorindice}`)
