let light = document.getElementById("light");
let lightSwitch = document.getElementById("light-switch");

lightSwitch.addEventListener("click", toggleLight)
lightSwitch.addEventListener("keypress", function(event){
   event.preventDefault();
})

document.body.addEventListener("keypress", function(event){
   if (event.key === " ") {
      toggleLight();
   }
})

let sunRiseCount = 0;

let sunWidth = "50"

function toggleLight() {
   let switchState = lightSwitch.classList.toggle("on")
   light.classList.toggle("on", switchState)
   document.body.classList.toggle("on", switchState)

   if (switchState) {
      sunRiseCount++
      sunWidth--
      light.innerHTML = sunRiseCount
      light.style.width = sunRiseCount + "rem";
      light.style.height = sunWidth + "rem";

   }

}