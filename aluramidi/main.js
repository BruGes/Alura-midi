function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}


const listadeTeclas = document.querySelectorAll('.tecla');
for( let i = 0;i < listadeTeclas.length; i++){

    const tecla = listadeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
       tocaSom(idAudio);
    }

    
    

    
}