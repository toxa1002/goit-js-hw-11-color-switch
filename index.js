const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const min = 0;
const max = colors.length - 1;
const DELAY = 1000;
let setIntervalId = null;

const refs = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
};

refs.startButton.addEventListener('click', startChangeColor);
refs.stopButton.addEventListener('click', stopChangeColor);
    

// функция для генерации случайного значения индекса массива. 
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// функция добавления инлайн стиля на боди со случайным цветом.
function addColorBody () {
    const indexColor = randomIntegerFromInterval(min, max);
    refs.body.style.backgroundColor = (colors[indexColor]);    
};
// функция интревала 
function changeColorBodyByInterval() {
    setIntervalId = setInterval(() => {
        addColorBody();
    }, DELAY);
};
// запуск функции по старту
function startChangeColor() {
    changeColorBodyByInterval();
    refs.startButton.disabled = true;
};
// остановка по стопу
function stopChangeColor() {
    refs.startButton.disabled = false;
    clearInterval(setIntervalId);
}

