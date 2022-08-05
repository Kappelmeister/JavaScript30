const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d'); //**This is where we´re gonna paint */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55'; //** These three atributes are the line draw */
context.lineJoin = 'round'; //** These give the round efect to the lines */
context.lineCap = 'round';
context.lineWidth = 30; //** We kept this size because otherwise too big */
// context.globalCompositeOperation = 'multiply;'

let isDrawing = false; //!!This is getting by default false because once we click will be truth and will paint
let lastX = 0; //** We need coordinates to create a line. A line has X, Y coordinates */
let lastY = 0;
let hue = 0; //** This is for the colors */
let direction = true;

function draw(e) {
    if (!isDrawing) return; //!!This is to stop the function from running when they are not clicking down
    console.log(e);
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath(); //** This is the starting point where all the points will begin */
    context.moveTo(lastX, lastY); //** This is the path created from zero, from begin point */
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Destructuring in array

    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (context.lineWidth >= 100 || context.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => { //** Yuu have to pass the event in order to update the position of the point instead of X,Y always to 0 it will begin where it ended */
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false); //** If we don´t put this, we can get out the screen and the program will think we´re still drawing. So if you leave it finishes */
