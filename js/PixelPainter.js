const colorArea = document.getElementById('colors');
const canvasArea = document.getElementById('canvas');

const makeCanvasMatrix = function (x, y) {
  let colCount = 1;
  let boxCount = 1;

  for (let i = 0; i < x; i++) {
    let collum = document.createElement('div');
    collum.id = 'col' + colCount;
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
makeCanvasMatrix(40, 40);

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
      colorBox.id = colorBoxCount;
      colorBox.className = 'colorBoxes';
      colorBoxCount++;
      if (colorBox.id < 5) {
        colorBox1.appendChild(colorBox);
      }
      if (colorBox.id > 4 && colorBox.id < 9) {
        colorBox2.appendChild(colorBox);
      }
      if (colorBox.id > 8 && colorBox.id < 13) {
        colorBox3.appendChild(colorBox);
      }
      if (colorBox.id > 12 && colorBox.id < 17) {
        colorBox4.appendChild(colorBox);
      }
    }
  }
}
makeColorSwath(4,4);