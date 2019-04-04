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

//
const colorArea = document.getElementById('colors');
const canvasArea = document.getElementById('canvas');


const makeCanvasMatrix = function (x, y) {
  let colCount = 1;
  let boxCount = 1;

  for (let i = 0; i < x; i++) {
    let collum = document.createElement('div');
    collum.id = colCount;
    collum.className = 'canvasCollumns'
    canvasArea.appendChild(collum);
    colCount++;
    for (let k = 0; k < y; k++) {
      let box = document.createElement('div');
      box.id = boxCount;
      box.className = 'boxes';
      collum.appendChild(box);
      boxCount++
    }
  }
}
makeCanvasMatrix(50, 50);

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
makeColorSwath(4, 12);

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
  console.log(isMouseDown);
}

function startDragging() {
  if (isMouseDown == true) {
    this.style.backgroundColor = currentColor;
  }
}

function stopDraggingMe(){
  isMouseDown = false;
}

setInterval(function(){console.log(isMouseDown)}, 1000);