
function abrirFechar(){
    const nvg = document.getElementById('nvg')
    const brgr = document.getElementById('brgr')
    if(nvg.style.display =='block'){
        nvg.style.display ='none'
        brgr.style.transform ='rotateY(360deg)'
    }else{
        nvg.style.display ='block'
        brgr.style.transition = 'transform .5s'
        brgr.style.transform ='skewY(20deg)'
    }
}

// Pegando data para dar bom dia, boa tarde e boa noite

const tempo = new Date()
const dia = tempo.getDay()
const hora = tempo.getHours()
const min = tempo.getMinutes()

function comprimento(){
    const cumprimento = document.querySelector('#cumprimento')
    if(hora < 12){
        cumprimento.innerHTML = 'Gih Stilus- Bom dia!'
    }else if(hora <= 18){
        cumprimento.innerHTML = 'Gih Stilus - Boa tarde!'
    }else{
        cumprimento.innerHTML = 'Gih Stilus - Boa noite!'
    }
}

comprimento()
