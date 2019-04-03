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
      colorBoxCount++;
      colorCollum.appendChild(colorBox);

    }
  }
}
makeColorSwath(4, 4);

//I know there is a better way to do this somewhere but i'd rather just get pixels on screen instead of staring into the abyss trying to figure this out

const blkColor = document.getElementById('color1');
blkColor.addEventListener('click', getColor);
const bluColor = document.getElementById('color2');
bluColor.addEventListener('click', getColor);
const purpColor = document.getElementById('color3');
purpColor.addEventListener('click', getColor);
const tealColor = document.getElementById('color4');
tealColor.addEventListener('click', getColor);
const redColor = document.getElementById('color5');
redColor.addEventListener('click', getColor);
const cfbColor = document.getElementById('color6');
cfbColor.addEventListener('click', getColor);
const magenColor = document.getElementById('color7');
magenColor.addEventListener('click', getColor);
const salmColor = document.getElementById('color8');
salmColor.addEventListener('click', getColor);
const goldColor = document.getElementById('color9');
goldColor.addEventListener('click', getColor);
const pinkColor = document.getElementById('color10');
pinkColor.addEventListener('click', getColor);
const limeColor = document.getElementById('color11');
limeColor.addEventListener('click', getColor);
const sadBColor = document.getElementById('color12');
sadBColor.addEventListener('click', getColor);
const slaGrayColor = document.getElementById('color13');
slaGrayColor.addEventListener('click', getColor);
const khakiColor = document.getElementById('color14');
khakiColor.addEventListener('click',getColor);
const sandBroColor = document.getElementById('color15');
sandBroColor.addEventListener('click', getColor);
const killMeNow = document.getElementById('color16');
killMeNow.addEventListener('click', getColor);



function getColor() {
  console.log('test')
}