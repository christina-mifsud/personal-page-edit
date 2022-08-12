/* Load Overlay with Text */

function overlay() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("text").style.display = "block";
}

/* Flashing Cursor for Input */

let cursor = true;
let speed = 250;
setInterval(() => {
  if (cursor) {
    document.getElementById('cursor').style.opacity = 0;
    cursor = false;
  } else {
    document.getElementById('cursor').style.opacity = 1;
    cursor = true;
  }
}, speed);

/* Turn Off On Click */

//window.onclick = off;

// function off() {
//   document.getElementById("overlay").style.display = "none";
// };



/* Input to Speech Feature */

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

document.getElementById('button').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('I see you '));
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(getNumberOrString(document.getElementById('name').value)));
  document.getElementById("overlay").style.display = "none";
});


/************************************ */
