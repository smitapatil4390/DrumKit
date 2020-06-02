var buttons = document.querySelectorAll(".drum");
var i = 0, length = buttons.length;
for (i; i < length; i++) {

        buttons[i].addEventListener("click", function() {
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            this.style="color:green";
        });

}














































































``
