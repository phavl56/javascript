function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_input = document.getElementById('txtano')
    var ano_numero = Number(ano_input.value)
    var result = document.getElementById('result')

    if (ano_input.value.length == 0 || ano_numero > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }
    else{
        var sex_input = document.getElementsByName('radsex')
        var idade = ano - ano_numero
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto', 'src')

        if (sex_input[0].checked){
            genero = 'Homem'
            if (idade <= 10){
                img.src = 'fotos/bebeh.jpg'
            }
            else if (idade <= 21){
                img.src = 'fotos/jovemh.jpg'
            }
            else if (idade <= 60){
                img.src = 'fotos/adulth.jpg'
            }
            else{
                img.src = 'fotos/idosoh.jpg'
            }
        }
        else {
            genero = 'Mulher'
            if (idade <= 10){
                img.src = 'fotos/bebem.jpg'
            }
            else if (idade <= 21){
                img.src = 'fotos/jovemm.jpg'
            }
            else if (idade <= 60){
                img.src = 'fotos/adultm.jpg'
            }
            else{
                img.src = 'fotos/idosom.jpg'
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        result.appendChild(img)
    }


}