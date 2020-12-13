var drum_no = document.querySelectorAll(".drum").length;
for (var i = 0; i < drum_no; i++){
    document.querySelectorAll("button")[i].addEventListener("click" ,function (){
        var click = this.innerHTML;
        sound(click);
        animation(click);
    });
    document.addEventListener("keydown", function(event){
        sound(event.key);
        animation(event.key);
    });
}


function sound(key) {

        switch (key){
            case "w":
                var i1 = new Audio('sounds/crash.mp3');
                i1.play();
                break;
            case "a":
                var i2 = new Audio('sounds/kick-bass.mp3');
                i2.play();
                break;
            case "s":
                var i3 = new Audio('sounds/snare.mp3');
                i3.play();
                break;
            case "d":
                var i4 = new Audio('sounds/tom-1.mp3');
                i4.play();
                break;
            case "j":
                var i5 = new Audio('sounds/tom-2.mp3');
                i5.play();
                break;
            case "k":
                var i6 = new Audio('sounds/tom-3.mp3');
                i6.play();
                break;
            case "l":
                var i7 = new Audio('sounds/tom-4.mp3');
                i7.play();
                break;
            default: console.log(key)
}
}

function animation(C_key) {
    var ani = document.querySelector("."+ C_key);
    ani.classList.add("pressed");
    setTimeout(function() {
        ani.classList.remove("pressed")
    }, 100);
}
