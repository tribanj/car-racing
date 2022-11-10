var bluecar = document.getElementById("bluecar");
var purpulcar = document.getElementById("purpulcar");
var redcar = document.getElementById("redcar");
var racecar = document.getElementById("racecar");
var result = document.getElementById("result");
const point = document.getElementById("point");
var game = document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound");
var endsound = document.getElementById("endsound");

//racecar=
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {

        var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
        if (racecarLeft < 260) { racecar.style.left = (racecarLeft + 130) + "px" }
        jumpsound.play()
    };

    if (e.keyCode == "37") {
        var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
        if (racecarLeft > 0) { racecar.style.left = (racecarLeft - 130) + "px" }
        jumpsound.play()
    };

})

//blue car move
bluecar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 130)
    bluecar.style.left = random + "px"
    counter++
})
//purpul car move
purpulcar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 130)
    purpulcar.style.left = random + "px"
    counter++
})
//red car
redcar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 130)
    redcar.style.left = random + "px"
    counter++
})
//game over
setInterval(function Gameover() {
    var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var bluecarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
    if ((bluecarLeft === racecarLeft) && (bluecarTop > 434) && (bluecarTop < 500)) {
        result.style.display = "block";
        game.style.display = "none";
        point.innerHTML = `score: ${counter} `;
        endsound.play()
     
        counter = 0;

    }
}, 10)