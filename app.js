"use strict"

const etcher = document.querySelector('.etcher');
const slider = document.getElementById('slider');
const colorPicker= document.querySelector('#colorPicker');

//initial grid
createGrid()
draw()
//set the value for the cols and rows for the grid
slider.addEventListener('input', function(e){
    etcher.innerHTML = ''
    let size = e.target.value;
    createGrid(size);
    draw();
})

//create div add class box
//set 16x16 grid of boxes and append them to the etcher
function createGrid(size=16){

    let gridSize = size**2;
    for(let i=0;i<gridSize;i++){
        const div = document.createElement('div');
        div.classList.add("box");
        etcher.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        etcher.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        etcher.appendChild(div);
    } 
}


let color = 'rgb(0,0,0)';
let mouse = false
document.body.onmousedown = () => (mouse = true)
document.body.onmouseup = () => (mouse = false)

function draw(){
    colorPicker.addEventListener('change', changeColor, false);
    
    const box  = document.querySelectorAll('.box');
    
    box.forEach(b =>{
        b.addEventListener('mouseover', function(e){
            if(e.type === 'mouseover'&& mouse){
                e.target.style.background = `${color}`;
            }
            
        })
        b.addEventListener('mousedown', function(e){
            e.target.style.background = `${color}`
        })
    })
}
//helper function to return color value
function changeColor(e){
    color = e.target.value;
}


