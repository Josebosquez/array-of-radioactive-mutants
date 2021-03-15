/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(add) {
  add.push("Colin")
}
function addMeToStart(arr) {
  arr.unshift("Colin")
}

function changeLast(str, str1) {
  str[str.length - 1] = str1
}

function changeAllValuesTo(arr, newValue) {
  let arr1 = [];
  for (i = 0; i < arr.length; i++) {
    arr[i] = newValue
  }
}

function oddOrEven(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i] % 2 !== 0) {
      str[i] = "odd"
    } else {
      str[i] = "even"
    }
  }
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
