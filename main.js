
function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');   

listaDeTeclas[0].onclick = tocaSom;

let i = 0;

while ( i < listaDeTeclas.length){

    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio)
    };

    i++;
}