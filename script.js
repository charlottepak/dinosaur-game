var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}






var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

    function jump(){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },500);
    }
    
    var checkDead = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
        if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
            block.style.animation = "none";
            block.style.display = "none";
            alert("Game Over. Score: " +totalSeconds);
        }
    },10);