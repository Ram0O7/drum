//Detecting button press
var numberOfbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //action when clicked
        var buttonInnerhtml = this.innerHTML;
        makeSound(buttonInnerhtml);

    });
}
//Detecting keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
});
        function makeSound(key) {
            switch (key) {
                case 'w':
                    var audio = new Audio("tom-1.mp3");
                    audio.play();
                    break;
                case 'a':
                    var audio = new Audio("tom-2.mp3");
                    audio.play();
                    break;
                case 's':
                    var audio = new Audio("tom-3.mp3");
                    audio.play();
                    break;
                case 'd':
                    var audio = new Audio("tom-4.mp3");
                    audio.play();
                    break;
                case 'j':
                    var audio = new Audio("tom-5.mp3");
                    audio.play();
                    break;
                case 'k':
                    var audio = new Audio("tom-6.mp3");
                    audio.play();
                    break;
                case 'l':
                    var audio = new Audio("tom-7.mp3");
                    audio.play();
                    break;
    
                default:
                    console.log(buttonInnerhtml);
                    break;
            }
        }
  
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");},100)
};