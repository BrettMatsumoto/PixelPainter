// //Area to make HTML
// let colorCanvasHolder = document.createElement('div');
// colorCanvasHolder.id = 'bigBox';
// document.body.appendChild(colorCanvasHolder);

// let placeIHoldColors = document.createElement('div');
// placeIHoldColors.id = "colors";
// colorCanvasHolder.appendChild(placeIHoldColors);

// let placeToPutCanvas = document.createElement('div');
// placeToPutCanvas.id = 'canvas';
// colorCanvasHolder.appendChild(placeToPutCanvas);

// let moarButtButts = document.createElement('div');
// moarButtButts.id = 'otherOptions';
// document.body.appendChild(moarButtButts);

// let clearYoButt = document.createElement('button');
// clearYoButt.innerHTML = 'CLEAR';
// clearYoButt.id = 'clearButton';
// moarButtButts.appendChild(clearYoButt);

// let eraseButt = document.createElement('button');
// eraseButt.innerHTML = 'ERASE';
// eraseButt.id = 'eraseButton';
// moarButtButts.appendChild(eraseButt);

// let newColorChoices = document.createElement('button');
// newColorChoices.innerHTML = 'GET NEW COLORS';
// newColorChoices.id = 'newColors';
// moarButtButts.appendChild(newColorChoices);

// let makeLine = document.createElement('button');
// makeLine.innerHTML = 'LINE';
// makeLine.id = 'drawLine';
// moarButtButts.appendChild(makeLine);

// //
// const colorArea = document.getElementById('colors');
// const canvasArea = document.getElementById('canvas');
// let pixelMatrix = [];


// const makeCanvasMatrix = function (x, y) {
//   let colCount = 1;
//   let boxCount = 1;

//   for (let i = 0; i < x; i++) {
//     let collum = document.createElement('div');
//     let collumArray = [];
//     collum.id = colCount;
//     collum.className = 'canvasCollumns'
//     canvasArea.appendChild(collum);
//     colCount++;
//     for (let k = 0; k < y; k++) {
//       let box = document.createElement('div');
//       box.id = boxCount;
//       box.className = 'boxes';
//       collum.appendChild(box);
//       collumArray.push(box);
//       boxCount++
//     }
//     pixelMatrix.push(collumArray);
//   }
// }
// makeCanvasMatrix(100, 66);
// // console.log(pixelMatrix);

// const makeColorSwath = function (x, y) {
//   let colorCollumCount = 1;
//   let colorBoxCount = 1;

//   for (let i = 0; i < x; i++) {
//     let colorCollum = document.createElement('div');
//     colorCollum.id = 'colorBox' + colorCollumCount;
//     colorArea.appendChild(colorCollum);
//     colorCollumCount++;
//     for (let a = 0; a < y; a++) {
//       let colorBox = document.createElement('div');
//       colorBox.id = 'color' + colorBoxCount;
//       colorBox.className = 'colorBoxes';
//       colorBox.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
//       colorBoxCount++;
//       colorCollum.appendChild(colorBox);
//     }
//   }
// }
// makeColorSwath(4, 16);

// function randomColorGenerator() {
//   let getColorBox = document.getElementsByClassName('colorBoxes');
//   for (let i = 0; i < getColorBox.length; i++) {
//     getColorBox[i].style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
//   }
// }

// let currentColor;
// let isMouseDown = false;

// const getColorClass = document.getElementsByClassName('colorBoxes');
// for (var i = 0; i < getColorClass.length; i++) {
//   getColorClass[i].addEventListener('click', getColor);
// }

// function getColor() {
//   currentColor = this.style.backgroundColor;
// }

// let getAllBoxes = document.getElementsByClassName('boxes');
// for (var i = 0; i < getAllBoxes.length; i++) {
//   getAllBoxes[i].addEventListener('click', setColor);
//   getAllBoxes[i].addEventListener('mousedown', getReadyToDrag);
//   getAllBoxes[i].addEventListener('mouseover', startDragging);
//   getAllBoxes[i].addEventListener('mouseup', stopDraggingMe)
// }

// function setColor() {
//   this.style.backgroundColor = currentColor;
// }

// function getReadyToDrag() {
//   isMouseDown = true;
// }

// function startDragging() {
//   if (isMouseDown == true) {
//     this.style.backgroundColor = currentColor;
//   }
// }

// function stopDraggingMe() {
//   isMouseDown = false;
// }

// const getClearButt = document.getElementById('clearButton');
// getClearButt.addEventListener('click', clearCanvas);

// function clearCanvas() {
//   for (var i = 0; i < getAllBoxes.length; i++) {
//     getAllBoxes[i].style.backgroundColor = 'FFFFFF';
//   }
// }

// const getEraseButt = document.getElementById('eraseButton');
// getEraseButt.addEventListener('click', startErase);

// function startErase() {
//   if (currentColor !== 'FFFFFF') {
//     getEraseButt.style.backgroundColor = 'FFFFFF';
//   }
//   currentColor = 'FFFFFF';
// }

// const getNewColorButt = document.getElementById('newColors');
// getNewColorButt.addEventListener('click', randomColorGenerator);

// const lineButt = document.getElementById('drawLine');
// lineButt.addEventListener('click', drawMeALine);

//draw line on matrix
//make matrix using the nested for loop in the form of an array
//let matrixArray = [][] for horizontal and vertical recognition;

/*

[0][0]; [1][0]; [2][0]; [3][0];

[0][1]; [1][1]; [2][1]; [3][1];

[0][2]; [1][2]; [2][2]; [3][2];

[0][3]; [1][3]; [2][3]; [3][3];

    if point 1 is [0][3] and point 2 is [3][0] ----- for diagonal line
    line will be drawn from [[0,3],[1,2];[2,1][3,0]];

    **takeaway: x axis increments while y axis decrements and the oposite would be correct if point 1 and 2 were reversed**

    if point 1 is [0][0] and point 2 is [3][0] ----- for horizontal line
    line will be drawn from [0,0][1,0][2,0][3,0]

    *takeaway: x axis increments while y axis stays the same and the oposite would be correct if point 1 and 2 were reversed**

    if point 1 is [0][0] and point 2 is [0][3] ----- for vertical line
    line will be drawn from [0,0][0,1][0,2][0,3]

    *takeaway: x axis stays the same while y axis increments and the oposite would be correct if point 1 and 2 were reversed**

    pixel painter matrix is 100x66

    **
*/

// function drawMeALine(x,y){
//   let points = 1;
//   if (points == 1){
//     x = this.id;
//     points++
//   }
//   if (points == 2){
//     y = this.id;
//     points++
//   }
//   if (points == 3){
//     points = 1;
//   }
//   console.log(x);
//   console.log(y);
// }
console.log(screen.width);

const phoneScreen = window.matchMedia("(max-width: 320px)");
const iPadScreen = window.matchMedia("(min-width: 1024px)");

function matchMyMedia(x,y){
  if (x.matches){
    //Area to make HTML
let colorCanvasHolder = document.createElement('div');
colorCanvasHolder.id = 'bigBox';
document.body.appendChild(colorCanvasHolder);

let placeIHoldColors = document.createElement('div');
placeIHoldColors.id = "colors";
colorCanvasHolder.appendChild(placeIHoldColors);

let placeToPutCanvas = document.createElement('div');
placeToPutCanvas.id = 'canvas';
colorCanvasHolder.appendChild(placeToPutCanvas);

let moarButtButts = document.createElement('div');
moarButtButts.id = 'otherOptions';
document.body.appendChild(moarButtButts);

let clearYoButt = document.createElement('button');
clearYoButt.innerHTML = 'CLEAR';
clearYoButt.id = 'clearButton';
moarButtButts.appendChild(clearYoButt);

let eraseButt = document.createElement('button');
eraseButt.innerHTML = 'ERASE';
eraseButt.id = 'eraseButton';
moarButtButts.appendChild(eraseButt);

let newColorChoices = document.createElement('button');
newColorChoices.innerHTML = 'GET NEW COLORS';
newColorChoices.id = 'newColors';
moarButtButts.appendChild(newColorChoices);

let makeLine = document.createElement('button');
makeLine.innerHTML = 'LINE';
makeLine.id = 'drawLine';
moarButtButts.appendChild(makeLine);

//
const colorArea = document.getElementById('colors');
const canvasArea = document.getElementById('canvas');
let pixelMatrix = [];


const makeCanvasMatrix = function (x, y) {
  let colCount = 1;
  let boxCount = 1;

  for (let i = 0; i < x; i++) {
    let collum = document.createElement('div');
    let collumArray = [];
    collum.id = colCount;
    collum.className = 'canvasCollumns'
    canvasArea.appendChild(collum);
    colCount++;
    for (let k = 0; k < y; k++) {
      let box = document.createElement('div');
      box.id = boxCount;
      box.className = 'boxes';
      collum.appendChild(box);
      collumArray.push(box);
      boxCount++
    }
    pixelMatrix.push(collumArray);
  }
}
makeCanvasMatrix(100, 66);
// console.log(pixelMatrix);

const makeColorSwath = function (x, y) {
  let colorCollumCount = 1;
  let colorBoxCount = 1;

  for (let i = 0; i < x; i++) {
    let colorCollum = document.createElement('div');
    colorCollum.id = 'colorBox' + colorCollumCount;
    colorArea.appendChild(colorCollum);
    colorCollumCount++;
    for (let a = 0; a < y; a++) {
      let colorBox = document.createElement('div');
      colorBox.id = 'color' + colorBoxCount;
      colorBox.className = 'colorBoxes';
      colorBox.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
      colorBoxCount++;
      colorCollum.appendChild(colorBox);
    }
  }
}
makeColorSwath(4, 16);

function randomColorGenerator() {
  let getColorBox = document.getElementsByClassName('colorBoxes');
  for (let i = 0; i < getColorBox.length; i++) {
    getColorBox[i].style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  }
}

let currentColor;
let isMouseDown = false;

const getColorClass = document.getElementsByClassName('colorBoxes');
for (var i = 0; i < getColorClass.length; i++) {
  getColorClass[i].addEventListener('click', getColor);
}

function getColor() {
  currentColor = this.style.backgroundColor;
}

let getAllBoxes = document.getElementsByClassName('boxes');
for (var i = 0; i < getAllBoxes.length; i++) {
  getAllBoxes[i].addEventListener('click', setColor);
  getAllBoxes[i].addEventListener('mousedown', getReadyToDrag);
  getAllBoxes[i].addEventListener('mouseover', startDragging);
  getAllBoxes[i].addEventListener('mouseup', stopDraggingMe)
}

function setColor() {
  this.style.backgroundColor = currentColor;
}

function getReadyToDrag() {
  isMouseDown = true;
}

function startDragging() {
  if (isMouseDown == true) {
    this.style.backgroundColor = currentColor;
  }
}

function stopDraggingMe() {
  isMouseDown = false;
}

const getClearButt = document.getElementById('clearButton');
getClearButt.addEventListener('click', clearCanvas);

function clearCanvas() {
  for (var i = 0; i < getAllBoxes.length; i++) {
    getAllBoxes[i].style.backgroundColor = 'FFFFFF';
  }
}

const getEraseButt = document.getElementById('eraseButton');
getEraseButt.addEventListener('click', startErase);

function startErase() {
  if (currentColor !== 'FFFFFF') {
    getEraseButt.style.backgroundColor = 'FFFFFF';
  }
  currentColor = 'FFFFFF';
}

const getNewColorButt = document.getElementById('newColors');
getNewColorButt.addEventListener('click', randomColorGenerator);
  }
  if (y.matches){
//Area to make HTML
let colorCanvasHolder = document.createElement('div');
colorCanvasHolder.id = 'bigBox';
document.body.appendChild(colorCanvasHolder);

let placeIHoldColors = document.createElement('div');
placeIHoldColors.id = "colors";
colorCanvasHolder.appendChild(placeIHoldColors);

let placeToPutCanvas = document.createElement('div');
placeToPutCanvas.id = 'canvas';
colorCanvasHolder.appendChild(placeToPutCanvas);

let moarButtButts = document.createElement('div');
moarButtButts.id = 'otherOptions';
document.body.appendChild(moarButtButts);

let clearYoButt = document.createElement('button');
clearYoButt.innerHTML = 'CLEAR';
clearYoButt.id = 'clearButton';
moarButtButts.appendChild(clearYoButt);

let eraseButt = document.createElement('button');
eraseButt.innerHTML = 'ERASE';
eraseButt.id = 'eraseButton';
moarButtButts.appendChild(eraseButt);

let newColorChoices = document.createElement('button');
newColorChoices.innerHTML = 'GET NEW COLORS';
newColorChoices.id = 'newColors';
moarButtButts.appendChild(newColorChoices);

let makeLine = document.createElement('button');
makeLine.innerHTML = 'LINE';
makeLine.id = 'drawLine';
moarButtButts.appendChild(makeLine);

//
const colorArea = document.getElementById('colors');
const canvasArea = document.getElementById('canvas');
let pixelMatrix = [];


const makeCanvasMatrix = function (x, y) {
  let colCount = 1;
  let boxCount = 1;

  for (let i = 0; i < x; i++) {
    let collum = document.createElement('div');
    let collumArray = [];
    collum.id = colCount;
    collum.className = 'canvasCollumns'
    canvasArea.appendChild(collum);
    colCount++;
    for (let k = 0; k < y; k++) {
      let box = document.createElement('div');
      box.id = boxCount;
      box.className = 'boxes';
      collum.appendChild(box);
      collumArray.push(box);
      boxCount++
    }
    pixelMatrix.push(collumArray);
  }
}
makeCanvasMatrix(100, 66);
// console.log(pixelMatrix);

const makeColorSwath = function (x, y) {
  let colorCollumCount = 1;
  let colorBoxCount = 1;

  for (let i = 0; i < x; i++) {
    let colorCollum = document.createElement('div');
    colorCollum.id = 'colorBox' + colorCollumCount;
    colorArea.appendChild(colorCollum);
    colorCollumCount++;
    for (let a = 0; a < y; a++) {
      let colorBox = document.createElement('div');
      colorBox.id = 'color' + colorBoxCount;
      colorBox.className = 'colorBoxes';
      colorBox.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
      colorBoxCount++;
      colorCollum.appendChild(colorBox);
    }
  }
}
makeColorSwath(4, 16);

function randomColorGenerator() {
  let getColorBox = document.getElementsByClassName('colorBoxes');
  for (let i = 0; i < getColorBox.length; i++) {
    getColorBox[i].style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  }
}

let currentColor;
let isMouseDown = false;

const getColorClass = document.getElementsByClassName('colorBoxes');
for (var i = 0; i < getColorClass.length; i++) {
  getColorClass[i].addEventListener('click', getColor);
}

function getColor() {
  currentColor = this.style.backgroundColor;
}

let getAllBoxes = document.getElementsByClassName('boxes');
for (var i = 0; i < getAllBoxes.length; i++) {
  getAllBoxes[i].addEventListener('click', setColor);
  getAllBoxes[i].addEventListener('mousedown', getReadyToDrag);
  getAllBoxes[i].addEventListener('mouseover', startDragging);
  getAllBoxes[i].addEventListener('mouseup', stopDraggingMe)
}

function setColor() {
  this.style.backgroundColor = currentColor;
}

function getReadyToDrag() {
  isMouseDown = true;
}

function startDragging() {
  if (isMouseDown == true) {
    this.style.backgroundColor = currentColor;
  }
}

function stopDraggingMe() {
  isMouseDown = false;
}

const getClearButt = document.getElementById('clearButton');
getClearButt.addEventListener('click', clearCanvas);

function clearCanvas() {
  for (var i = 0; i < getAllBoxes.length; i++) {
    getAllBoxes[i].style.backgroundColor = 'FFFFFF';
  }
}

const getEraseButt = document.getElementById('eraseButton');
getEraseButt.addEventListener('click', startErase);

function startErase() {
  if (currentColor !== 'FFFFFF') {
    getEraseButt.style.backgroundColor = 'FFFFFF';
  }
  currentColor = 'FFFFFF';
}

const getNewColorButt = document.getElementById('newColors');
getNewColorButt.addEventListener('click', randomColorGenerator);
  } else {

  }
}
matchMyMedia(phoneScreen,iPadScreen);