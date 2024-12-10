/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!
//save turn on button into variable after DOM manipulation 
//save image to variable so it can be manipulated
//Create and add event listener function that changes the image to turn lightbulb on
//Test to see if works
const turnBulbOn = document.getElementById("turnBulbOn")
const image = document.getElementById("lightbulb")
function handleTurnBulbOn(){
  image.src = "./light-bulb-on.png";
}
turnBulbOn.addEventListener("click", handleTurnBulbOn)

//save turn off button into variable after DOM manipulation 
//Create and add event listener function that changes the image to turn lightbulb off
//Test to see if works
const turnBulboff = document.getElementById("turnBulbOff")
function handleTurnBulbOff(){
  image.src ="./light-bulb-off.png"
}
turnBulboff.addEventListener("click", handleTurnBulbOff)