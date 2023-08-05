// this code detects clicks:-

for (i=0; i<document.querySelectorAll("button").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function (){
        // this keyword represents the thing that trigger the event 
        makeSound(this.innerHTML);  
        btnAnimation(this.innerHTML);          
    }); 
}



// this code detects keypress:-

document.addEventListener("keypress", function(a){
    makeSound(a.key);
    btnAnimation(a.key);

})

function makeSound(xyz){

    switch(xyz){
        case "w" : 
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a" : 
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s" : 
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d" : 
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "j" : 
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k" : 
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l" : 
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
    }
}





















// just to stylise some keys "ignore"
document.querySelector(".w").style.color = "white";
document.querySelector(".a").style.color = "white";
document.querySelector(".d").style.color = "white";
document.querySelector(".l").style.color = "white";



