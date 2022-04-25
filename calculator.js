/******** 
 * Calling parent function 'calculator__keys' from DOM
 * addEventListener will listen for a click and event.target will return whatever button is pressed within the parent class
 **********/
const calculator =  document.querySelector('.calculator')
const keys =  calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')
keys.addEventListener('click', event => {
  if (!event.target.closest('button')) return 
  /************* 
  If you click on grid gap, you will select parent class calculator key, to stop this from happening use code below
  If event.target.closest is NOT a button, return the button closest to the event target
  key.textContent returns the value of the button istead of the whole HTML button script
    **********/
 
   /*******
   to update the calculator display, you need to find the div associated with the display (const display)
   then you are going to have to make a const displayValue parameter that shows the text content variable
   then you need to replave the displayValue with the key value to make the button clicked appear on the screen
   */
  
  const key = event.target
  const keyValue = key.textContent
  const displayValue = display.textContent
  const  {type}  = key.dataset /*set type as a variable*/
  const { previousKeyType } = calculator.dataset
  

  /*is this a number key?*/
 if (type == "number") {
  if (displayValue == '0') {
  display.textContent = keyValue /*at this point the screen should populate with the number of the button you clicked*/
  } else if (previousKeyType == 'operator') {
    display.textContent = keyValue
  } else if (keyValue == 'AC') {
    display.textContent = '0'
  } else {
      display.textContent = displayValue + keyValue
    }
 }
/*is this an operator key?*/

if (type == 'operator') {
  const operatorKeys = keys.querySelectorAll('[data-type = "operator"]')
  operatorKeys.forEach(el => { el.dataset.state = ''})
  key.dataset.state = 'selected'


calculator.dataset.firstNumber = displayValue
calculator.dataset.operator = key.dataset.key
} 

if (type == 'equal') {
  //perform a calculation 
  const firstNumber = parseInt(calculator.dataset.firstNumber)
  const operator = calculator.dataset.operator
  const secondNumber = parseInt(displayValue)
  console.log(firstNumber, operator, secondNumber)

  let result = ''
  if (operator == 'plus') result = firstNumber + secondNumber
  if (operator == 'minus') result = firstNumber - secondNumber
  if (operator == 'times') result = firstNumber * secondNumber
  if (operator == 'divide') result = firstNumber / secondNumber
  console.log(result)
  display.textContent = result


 // firstNumber + secondNumber
 // firstNumber * secondNumber
 // firstNumber - secondNumber
 // firstNumber / secondNumber
}



calculator.dataset.previousKeyType = type //need to reset when you hit operator to make sure the calculator knows it isn't an operator anymore when it runs the if else below

})



/*//Create functions for add, subtract, multiply, divide
function add() {
    var args = arguments;
    var index = 0
	for (i=0; i < arguments.length; i++) {
    index = index + args[i];
    };
};

function subtract() {
    var args = arguments;
    var index = 0
	for (i=0; i < arguments.length; i++) {
    index = index - args[i];
    };
};

function multiply() {
    var args = arguments;
    var index = 0
	for (i=0; i < arguments.length; i++) {
    index = index * args[i];
    };
};
  
function divide() {
    var args = arguments;
    var index = 0
	for (i=0; i < arguments.length; i++) {
    index = index / args[i];
    };
};


//Create a new function 'operate' that takes an operator and two numbers then calls one of the above functions to the numbers
function operate(x, y, operator) {
    switch (operator) {
      case "+":
        return add(x,y);
      case "-":
        return subtract(x,y);
      case "*":
        return multiply(x,y);
      case "/":
        return divide(x,y);
    }
  };
  
//Making the Calculator work
//Plan
//create an event listener that returns a number on the screen when the button is pressed
document.onclick = function(e, screen) {
  var targ;
  if (!e) {var e = window.event;}
  else {targ = e.target;}
  /*else if (e.srcElement) targ = e.srcElement;
  //if (targ.nodeType == 3) // defeat Safari bug
      //targ = targ.parentNode;
  var screen = document.getElementById("screen1");
  return screen.innerHTML = e.target.id;

}




const keys = document.querySelector('');
keys.addEventListener('click', (event) => {
  // Access the clicked element
  const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});*/