const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d'); //**This is where we´re gonna paint */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55'; //!!These three atributes are the line draw
context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false; //!!This is getting by default false because once we click will be truth and will paint
let lastX = 0; //** We need coordinates to create a line. A line has X, Y coordinates */
let lastY = 0;

function draw(e){
    console.log(e);
}

canvas.addEventListener('mousemove', draw);