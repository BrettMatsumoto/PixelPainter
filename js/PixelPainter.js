const phoneScreen = window.matchMedia('(max-width: 320px)');
const iPadScreen = window.matchMedia('(min-width: 1024px)');

function matchMyMedia(x, y) {
  if (x.matches) {
    let colorCanvasHolder = document.createElement('div');
    colorCanvasHolder.id = 'bigBox';
    document.body.appendChild(colorCanvasHolder);

    let placeIHoldColors = document.createElement('div');
    placeIHoldColors.id = 'colors';
    colorCanvasHolder.appendChild(placeIHoldColors);

    let placeToPutCanvas = document.createElement('div');
    placeToPutCanvas.id = 'canvas';
    colorCanvasHolder.appendChild(placeToPutCanvas);

    let additionalButtons = document.createElement('div');
    additionalButtons.id = 'otherOptions';
    document.body.appendChild(additionalButtons);

    let clearButton = document.createElement('button');
    clearButton.innerHTML = 'CLEAR';
    clearButton.id = 'clearButton';
    additionalButtons.appendChild(clearButton);

    let eraseButton = document.createElement('button');
    eraseButton.innerHTML = 'ERASE';
    eraseButton.id = 'eraseButtonon';
    additionalButtons.appendChild(eraseButton);

    let newColorChoices = document.createElement('button');
    newColorChoices.innerHTML = 'GET NEW COLORS';
    newColorChoices.id = 'newColors';
    additionalButtons.appendChild(newColorChoices);

    let makeLine = document.createElement('button');
    makeLine.innerHTML = 'LINE';
    makeLine.id = 'drawLine';
    additionalButtons.appendChild(makeLine);

    const colorArea = document.getElementById('colors');
    const canvasArea = document.getElementById('canvas');
    let pixelMatrix = [];

    const makeCanvasMatrix = function(x, y) {
      let colCount = 1;
      let boxCount = 1;

      for (let i = 0; i < x; i++) {
        let collum = document.createElement('div');
        let collumArray = [];
        collum.id = colCount;
        collum.className = 'canvasCollumns';
        canvasArea.appendChild(collum);
        colCount++;
        for (let k = 0; k < y; k++) {
          let box = document.createElement('div');
          box.id = boxCount;
          box.className = 'boxes';
          collum.appendChild(box);
          collumArray.push(box);
          boxCount++;
        }
        pixelMatrix.push(collumArray);
      }
    };
    makeCanvasMatrix(100, 66);

    const makeColorSwath = function(x, y) {
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
          colorBox.style.backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
          colorBoxCount++;
          colorCollum.appendChild(colorBox);
        }
      }
    };
    makeColorSwath(4, 16);

    function randomColorGenerator() {
      let getColorBox = document.getElementsByClassName('colorBoxes');
      for (let i = 0; i < getColorBox.length; i++) {
        getColorBox[i].style.backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
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
      getAllBoxes[i].addEventListener('mouseup', stopDraggingMe);
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

    const getClearButton = document.getElementById('clearButton');
    getClearButton.addEventListener('click', clearCanvas);

    function clearCanvas() {
      for (var i = 0; i < getAllBoxes.length; i++) {
        getAllBoxes[i].style.backgroundColor = 'FFFFFF';
      }
    }

    const getEraseButton = document.getElementById('eraseButtonon');
    getEraseButton.addEventListener('click', startErase);

    function startErase() {
      if (currentColor !== 'FFFFFF') {
        getEraseButton.style.backgroundColor = 'FFFFFF';
      }
      currentColor = 'FFFFFF';
    }

    const getNewColorButt = document.getElementById('newColors');
    getNewColorButt.addEventListener('click', randomColorGenerator);
  }
  if (y.matches) {
    //Area to make HTML
    let colorCanvasHolder = document.createElement('div');
    colorCanvasHolder.id = 'bigBox';
    document.body.appendChild(colorCanvasHolder);

    let placeIHoldColors = document.createElement('div');
    placeIHoldColors.id = 'colors';
    colorCanvasHolder.appendChild(placeIHoldColors);

    let placeToPutCanvas = document.createElement('div');
    placeToPutCanvas.id = 'canvas';
    colorCanvasHolder.appendChild(placeToPutCanvas);

    let additionalButtons = document.createElement('div');
    additionalButtons.id = 'otherOptions';
    document.body.appendChild(additionalButtons);

    let clearButton = document.createElement('button');
    clearButton.innerHTML = 'CLEAR';
    clearButton.id = 'clearButton';
    additionalButtons.appendChild(clearButton);

    let eraseButton = document.createElement('button');
    eraseButton.innerHTML = 'ERASE';
    eraseButton.id = 'eraseButtonon';
    additionalButtons.appendChild(eraseButton);

    let newColorChoices = document.createElement('button');
    newColorChoices.innerHTML = 'GET NEW COLORS';
    newColorChoices.id = 'newColors';
    additionalButtons.appendChild(newColorChoices);

    let makeLine = document.createElement('button');
    makeLine.innerHTML = 'LINE';
    makeLine.id = 'drawLine';
    additionalButtons.appendChild(makeLine);

    const colorArea = document.getElementById('colors');
    const canvasArea = document.getElementById('canvas');
    let pixelMatrix = [];

    const makeCanvasMatrix = function(x, y) {
      let colCount = 1;
      let boxCount = 1;

      for (let i = 0; i < x; i++) {
        let collum = document.createElement('div');
        let collumArray = [];
        collum.id = colCount;
        collum.className = 'canvasCollumns';
        canvasArea.appendChild(collum);
        colCount++;
        for (let k = 0; k < y; k++) {
          let box = document.createElement('div');
          box.id = boxCount;
          box.className = 'boxes';
          collum.appendChild(box);
          collumArray.push(box);
          boxCount++;
        }
        pixelMatrix.push(collumArray);
      }
    };
    makeCanvasMatrix(100, 66);
    const makeColorSwath = function(x, y) {
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
          colorBox.style.backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
          colorBoxCount++;
          colorCollum.appendChild(colorBox);
        }
      }
    };
    makeColorSwath(4, 16);

    function randomColorGenerator() {
      let getColorBox = document.getElementsByClassName('colorBoxes');
      for (let i = 0; i < getColorBox.length; i++) {
        getColorBox[i].style.backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
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
      getAllBoxes[i].addEventListener('mouseup', stopDraggingMe);
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

    const getClearButton = document.getElementById('clearButton');
    getClearButton.addEventListener('click', clearCanvas);

    function clearCanvas() {
      for (var i = 0; i < getAllBoxes.length; i++) {
        getAllBoxes[i].style.backgroundColor = 'FFFFFF';
      }
    }

    const getEraseButton = document.getElementById('eraseButtonon');
    getEraseButton.addEventListener('click', startErase);

    function startErase() {
      if (currentColor !== 'FFFFFF') {
        getEraseButton.style.backgroundColor = 'FFFFFF';
      }
      currentColor = 'FFFFFF';
    }

    const getNewColorButt = document.getElementById('newColors');
    getNewColorButt.addEventListener('click', randomColorGenerator);
  } else {
  }
}
matchMyMedia(phoneScreen, iPadScreen);
