
for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",check);
}
document.addEventListener("keydown",check2);

function check(){
    var key=this.innerHTML;
    clicked(key);
    buttonAnimation(key);
}

function check2(event){
    clicked(event.key);
    buttonAnimation(event.key);
}

function buttonAnimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    },100);
}

function clicked(pressedKey){
    switch(pressedKey){
        case "w":
            var sound=new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        
        case "a":
            var sound=new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound=new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            var sound=new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound=new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "k":
            var sound=new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "l":
            var sound=new Audio("sounds/snare.mp3");
            sound.play();
            break;
        default:
            console.log("unregistered key");
    }
}

