function carregar() {    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'fotos/manha.jpg'
        document.body.style.background = "#ffe955"
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'fotos/tarde.jpg'
        document.body.style.background = "#afffa5"
    }
    else{ 
        img.src = 'fotos/noite.jpg'
        document.body.style.background = '#9920ffff'
    }

}

