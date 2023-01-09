//vreate a function that creates when we click something
var NumberOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < NumberOfDrum; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);

})

function playSound(ch) {
    switch (ch) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var tom5 = new Audio('sounds/snare.mp3');
            tom5.play();
            break;
        case 'k':
            var tom6 = new Audio('sounds/crash.mp3');
            tom6.play();
            break;
        case 'l':
            var tom7 = new Audio('sounds/kick-bass.mp3');
            tom7.play();
            break;
        default : console.log("fuckOff");
    }
}
// function buttonAnimation(button) {
//     const activeButtom = document.querySelector("." + button);
//     activeButtom.className += " pressed";

//     setTimeout(function () {
//         const a = activeButtom.className.substring(0, 6);
//         activeButtom.className = a;
//     }, 100)
// }
// OR
function buttonAnimation(button) {
    const activeButtom = document.querySelector("." + button);
    console.log(activeButtom);
    activeButtom.classList.add("pressed");

    setTimeout(function () {
        activeButtom.classList.remove("pressed");
    }, 100)
}