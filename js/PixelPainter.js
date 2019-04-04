//Area to make HTML

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
makeColorSwath(4, 4);

let currentColor;
const getColorClass = document.getElementsByClassName('colorBoxes');
for (var i = 0; i < getColorClass.length; i++){
  getColorClass[i].addEventListener('click',getColor);
}

function getColor(){
  currentColor = this.style.backgroundColor;
  console.log(currentColor);
}

let getAllBoxes = document.getElementsByClassName('boxes');
for (var i =0; i<getAllBoxes.length;i++){
  getAllBoxes[i].addEventListener('click',setColor);
}
function setColor(){
  console.log('test')
  this.style.backgroundColor = currentColor;
}