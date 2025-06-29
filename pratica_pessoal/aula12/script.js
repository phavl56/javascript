function verificador() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_input = document.querySelector('input#input_ano')
    var ano_numero = Number(ano_input.value)

    if (ano_input.value.length <= 0 || ano_numero > ano || ano_numero <= 1870){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }
    else{
        var genero = document.getElementsByName('radsex')
        var idade = ano - ano_numero
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(genero[0].checked){
            genero = 'Homem'
            
            if(idade <= 10){
                img.setAttribute('src', 'fotos/bebeh.jpg')
            }
            else if(idade <= 21){
                img.setAttribute('src', 'fotos/jovemh.jpg')
            }
            else if(idade <= 60){
                img.setAttribute('src', 'fotos/adulth.jpg')
            }
            else{
                img.setAttribute('src', 'fotos/idosoh.jpg')
            }
            
        }
        else{
            genero = 'Mulher'
            if(idade <= 10){
                img.setAttribute('src', 'fotos/bebem.jpg')
            }
            else if(idade <= 21){
                img.setAttribute('src', 'fotos/jovemm.jpg')
            }
            else if(idade <= 60){
                img.setAttribute('src', 'fotos/adultm.jpg')
            }
            else{
                img.setAttribute('src', 'fotos/idosom.jpg')
            }
        }
    }
    var result = document.getElementById('result')
    result.innerHTML = `<p>${genero} com  ${idade} anos.</p>`
    result.appendChild(img)
}