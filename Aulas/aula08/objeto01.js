let amigo = {nome: 'kaua', 
sexo: 'M ', 
peso: 60.5, 
engordar(p=0){
    console.log('Engordou!')
    this.peso = amigo.peso + p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)