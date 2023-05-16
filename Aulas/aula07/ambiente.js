let num = [5, 7, 9, 4, 2]
console.log(`Vetor padrão é: ${num}`)
console.log(`Tem ${num.length} chaves`)
console.log(`O primeiro valor é ${num[0]}.`)
/*
num.sort()
console.log(`Vetor ordenado é: ${num}`)
console.log(`O primeiro valor é ${num[0]}`)
*/

let pos = num.indexOf(42)
if (pos == -1) {
    console.log(`Valor não encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
