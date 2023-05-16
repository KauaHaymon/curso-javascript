let valores = [8, 1 , 7]

for (let posição = 0; posição < valores.length; posição++) {
    console.log(`A posição ${posição} tem o valor ${valores[posição]}`)
}

for (let pos in valores) {
    console.log(valores[pos])
}