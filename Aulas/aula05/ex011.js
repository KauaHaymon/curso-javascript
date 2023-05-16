var agora = new Date()
var h = agora.getHours() 
var m = agora.getMinutes()
console.log(`Agora são ${h} horas e ${m} minutos`)
if (h < 12){
    console.log('BOM DIA')
} else if (h <= 18){
    console.log('BOA TARDE')
} else {
    console.log('BOA NOITE')
}