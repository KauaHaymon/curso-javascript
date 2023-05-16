var age = 68
console.log(`Você tem ${age} anos`)
if(age < 16){
    console.log('não vota')
} else if(age < 18 || age > 67){
    console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}