/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!
// pull the colour picker input element with the id "colorPicker" into a variable so that it can be manipulated by js
//pull the canvas with id "canvas"
//get colour value from colour picker
// create function to handle the on change event that change colour of the canvas when the colour is changed in the picker
// test to by calling the add event listner 

const canvasColour = document.getElementById("colorPicker")
const canvas = document.getElementById("canvas")



function changeCanvasColour(){
  let newColour = canvasColour.value
  canvas.style.backgroundColor = newColour
}
canvasColour.addEventListener("input", changeCanvasColour)


