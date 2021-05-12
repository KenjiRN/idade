

function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    // var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")

    }else{
        var fsex= document.getElementsByName('radsex')
        var idade = ano - fano.value
        // res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')


        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<14){
                img.setAttribute('src','2.jpg')
             } else if(idade<60){
                img.setAttribute('src','4.jpg')
                }else {
                    img.setAttribute('src','6.jpg')
            }





        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<14){
                img.setAttribute('src','1.jpg')
                
             } else if(idade<60){
                img.setAttribute('src','3.jpg')

                }else {
                    img.setAttribute('src','5.jpg')
            }

        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}