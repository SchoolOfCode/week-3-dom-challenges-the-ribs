/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!

// get star div container
const starsContainer = document.getElementById('stars');

//get star element/icon and create variable 
const totalStars = document.querySelector('.star-icon');
//get slider value and add to variable
const slider = document.getElementById('starSlider');
//console.log('slider.value:', slider.value)
let sliderValue = slider.value;



//create a function that sets the amount of stars equal to the value of the slider
function changeStars() {

  let sliderValue = slider.value;
  
  //create a new span element
  let newSpan = document.createElement('span');
  newSpan.appendChild(document.createTextNode('TEST'));

  console.log('newSpan', newSpan)

  

  if (sliderValue === 1){
    totalStars.textContent = 1;
  } else if (sliderValue === 2){




  } 
  

}


//inside id stars add star icon span- add another span element
//create a new element that is the new star icon
// after creating we can append it to the element with the id 'stars'





// clear on what type of event 'verb' e.g onchange this should be and set up an eventListender for when slider moves to update stars
changeStars();
slider.addEventListener('input', changeStars);
