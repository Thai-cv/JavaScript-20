var multiplo = (multi1, multi2) => {
var lista = []
var total = 0

    for (let i = 1; i <= 1000; i++) {
        if (i % multi1 == 0 || i % multi2 == 0) {
            lista.push(i)
        }
    }

    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }

    return total
}

console.log(multiplo(5,7))
