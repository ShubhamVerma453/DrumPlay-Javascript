var xx = document.querySelectorAll(".drum");

for(var i=0; i<xx.length; i++){
    xx[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        anime(this.innerHTML);
    });
}

document.addEventListener("keydown", function(Event){
    playSound(Event.key);
    anime(Event.key);
})

var playSound = function(ke){
    console.log(ke);

    switch (ke) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();            
        break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();            
        break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();            
        break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();            
        break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();            
        break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();            
        break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();            
        break;
    
        default:
            console.log("wronge key press");
        break;
    }
}

var anime = function(ke){
    var x = document.querySelector("."+ke);
    if(x != null){
    x.classList.add("pressed");
    setTimeout(function(){
        x.classList.remove("pressed")
    }, 100);
}
}