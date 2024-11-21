
const numberSection = document.querySelector('.numbers')
const operatorDisplay = document.querySelector('.operator');
const digit = document.querySelectorAll('.digit');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const operation = document.querySelectorAll('.operation');
const clearBtn = document.querySelector('.clear-btn');
const backspaceBtn = document.querySelector('.backspace-btn');


// -------- OPERATIONS LOGIC --------

function add(num1, num2){
  return strToNumber(num1) + strToNumber(num2);
}

function subtract(num1, num2){
  return strToNumber(num1) - strToNumber(num2);
}

function multiply(num1, num2){
  return strToNumber(num1) * strToNumber(num2);
}

function divide(num1, num2){
  if(num2 == 0){
    alert('ARE YOU TRYING TO CREATE A BLACK HOLE!')

  }
  return strToNumber(num1) / strToNumber(num2);
}

let result;

// convert string to number
function strToNumber(n1){
  return Number(n1);
}

function operate(operator){
  if(data.num2 === '' || data.num2 === ''){
    alert('enter both operands');
  }
  switch (operator) {
    case '+':
      result = add(data.num1, data.num2);
      numberSection.textContent = result;
      data.num1 = result;
      break;
    case '-':
      result = subtract(data.num1, data.num2);
      numberSection.textContent = result;
      data.num1 = result;
      break;
    case '*':
      result = Math.round(multiply(data.num1, data.num2)* 100000) / 100000;      
      numberSection.textContent = result;
      data.num1 = result;
      break;
    case '/':
      result = Math.round(divide(data.num1, data.num2) * 100000) / 100000;
      if(result === Infinity){
        numberSection.textContent = `PLS DON'T CREATE ONE...`;
      }else{
        numberSection.textContent = result;
        data.num1 = result;
      }
      break;
  }
}


// ------ CALCULATION LOGIC ---------

// object to store the data
let data = {
  num1: '',
  num2: '',
  operator: ''
}

function clearData(){
data.num1 = data.num2 = '';
data.operator = '';
numberSection.textContent = '0';
operatorDisplay.textContent = '';
// console.clear();
}

// -------- DISPLAY LOGIC -----------


let displayVal = 0;
numberSection.textContent = `0`;




// -----OPERATORS EVENT-LISTENERS------

Array.from(operation).forEach(item => {
  item.addEventListener('click', function(){
    decideOperator(item);
  });
})

function decideOperator(item){
  // console.log(`type of item = ${typeof item}`)
  if(typeof item === "string"){
    if(item === '+' || item === '-' || item === '*' || item === '/'){
      operatorDisplay.textContent = item;
      data.operator = item;
      console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operation = ${data.operator}`);
    }
  } else{
    if(item.textContent === '+' || item.textContent === '-' || item.textContent === '*' || item.textContent === '/'){
      operatorDisplay.textContent = item.textContent;
      data.operator = item.textContent;
      console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operation = ${data.operator}`);
    }
  }
}


// operate function

function resetValues(){
  data.operator = '';
  data.num2 = ''
  operatorDisplay.textContent = '';
}

equal.addEventListener('click', function(){
  operate(data.operator);
  resetValues();
  console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operator = ${data.operator}`);
})

clearBtn.addEventListener('click', function(){
  clearData();
})

// ---- NUMBERS CLICK EVENT-LISTENERS -----

Array.from(digit).forEach(item => {
  item.addEventListener('click', function(){    
    updateDisplayAndData(item);
  })
})

/**
 * Updates the display
 * @param {Node} item updates the display and send the data of the Node to the data variable as well
 * @param {String} keyName input from keyboard
 */


function updateDisplayAndData(item, keyName) {
  if(item === null){
    displayVal = keyName;
  }else{
    displayVal = item.textContent;
  }
    if(data.operator === ''){
      data.num1 += displayVal;
      numberSection.textContent = data.num1;
    } else{
      data.num2 += displayVal;
      numberSection.textContent = data.num2;
    }
    console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operator = ${data.operator}`);
}

/**
 * Inserts decimal in the digit
 */

function putDecimal(){
  if(!checkDecimal(data.num1) && data.operator === ''){
    data.num1 += decimal.textContent;
    numberSection.textContent = data.num1;
  } else{
    data.num2 += decimal.textContent;
    numberSection.textContent = data.num2;

  }
  
  console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operator = ${data.operator}`);
}

decimal.addEventListener('click', function(){
  putDecimal();
})


/**
 * Return true/false depending upon the input provided
 * @param n - takes input and checks for decimal present in the number or string
 * @returns boolean value
 */

// decimal case
function checkDecimal(n){
  // console.log(n);
  console.log(`type of n = ${typeof n}`);
  if(typeof n == 'number') return true;
  return n.includes('.');
}

// Backspace logic

/**
 * Removes the last element from the string/digit
 */
function backSpace(){
  if(data.num1 === '' && data.num2 === ''){
    alert('no more digits to remove');
  } else{
    if(data.num2 === ''){
      data.num1 = removeLastElement(data.num1);
      numberSection.textContent = `${data.num1}`;
      console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operator = ${data.operator}`);
    } else{
      data.num2 = removeLastElement(data.num2);
      numberSection.textContent = `${data.num2}`;
      console.log(`num1 = ${data.num1}, num2 = ${data.num2}, operator = ${data.operator}`);
    }
  }
}


backspaceBtn.addEventListener('click', function(){
  backSpace();
})


/**
 * Returns a copy of string with last element removed.
 * @param data Accepts the incoming value in the string format 
 * @returns string with last element removed
 */ 

function removeLastElement(data){
  return data.slice(0, -1);
}

// KEYBOARD EVENT-LISTENERS

window.addEventListener('keydown', function(event){
  if(event.key >= '0' && event.key <='9'){
    console.log(`type of eventKey = ${typeof event.key}`)
    updateDisplayAndData(null,event.key);
  }

  if(event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') decideOperator(event.key);

  if(event.key === 'Enter'){
    operate(operatorDisplay.textContent);
    resetValues();
  } 

  if(event.key === 'Backspace') backSpace();

  if(event.key === '.') putDecimal();

  if(event.key === 'Escape') clearData();
})


// include special prompt for 80085
