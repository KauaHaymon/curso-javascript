function carregar(){
    var bom = window.document.querySelector('div#bom')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var min = data.getMinutes()
    //var hora = data.getHours()

    var hora = 7

    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#76b5c5'
        bom.innerHTML = 'BOM DIA!'
        msg.innerHTML = `Agora são ${hora}:${min} da manhã.`
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#e28743'
        bom.innerHTML = 'BOA TARDE!'
        msg.innerHTML = `Agora são ${hora}:${min} da tarde.`
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#063970'
        bom.innerHTML = 'BOA NOITE!'
        msg.innerHTML = `Agora são ${hora}:${min} da noite`
    }
}
