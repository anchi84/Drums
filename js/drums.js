function play(elid) {
    var audio = document.getElementById(elid);
    if (audio != null){
        audio.play();
        $('h1').toggleClass("change");
    }
}

function onKeyDown(event){
    console.log(event);
        play(event.key);
}


window.addEventListener('keydown', onKeyDown);