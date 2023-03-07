
function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');   

listaDeTeclas[0].onclick = tocaSom;

let i = 0;

while ( i < listaDeTeclas.length){
    listaDeTeclas[i].onclick = function(){
        tocaSom('#som_tecla_pom')
    };
    i++;
}