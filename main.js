const body=document.querySelector('body');

const gridContainer=document.querySelector('.gridContainer');

//get size of the container
let size;
size=prompt('How many squares you want each side? (Max 100)');
while(isNaN(size)||size>100){
    alert('Please input number only and max number is 100')
    size=prompt('How many squares you want each side? (Max 100 and please input number only)');
}   
while(size>100){
    alert('Please input from 1-100 only')
    size=prompt('How many squares you want each side? (Max 100)');
}     
let totalGrid=size*size;
for(i=0;i<totalGrid;i++){
    let grid = document.createElement('div');
    gridContainer.appendChild(grid);
    grid.style.height=`${480/size}px`;
    grid.style.width=`${480/size}px`;
    grid.addEventListener('mouseover',(event)=>{grid.style.backgroundColor='black';
    },);
};

function getNewSize(){
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    size=prompt('How many squares you want each side? (Max 100)');
    while(size>100){
            alert('Please input from 1-100 only')
            size=prompt('How many squares you want each side? (Max 100)');        
    }
    while(isNaN(size)||size>100){
        alert('Please input number only and max number is 100')
        size=prompt('How many squares you want each side? (Max 100 and please input number only)');
    }   
    setGrid(size);
}
//size button
const sizeButton=document.querySelector('.sizeButton');
sizeButton.addEventListener('click',getNewSize);

gridContainer.style.width=`480px`
gridContainer.style.height=`480px`;
function setGrid(size){
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let totalGrid=size*size;
    for(i=0;i<totalGrid;i++){
        let grid = document.createElement('div');
        gridContainer.appendChild(grid);
        grid.style.height=`${480/size}px`;
        grid.style.width=`${480/size}px`;
        grid.addEventListener('mouseover',(event)=>{grid.style.backgroundColor='black';
        },);
    };
}
//pick color button
const getColor=document.querySelector('.colorPicker');
getColor.addEventListener('click',color);
function color(){
    const gridContainerContent=document.querySelectorAll('.gridContainer div');
    for(let i=0;i<gridContainerContent.length;i++){
        gridContainerContent[i].addEventListener('mouseover',(event)=>{gridContainerContent[i].style.backgroundColor=`${getColor.value}`;});
    }
}

//Default grid will be 16 square each side
setGrid(16);

//clear button
const clearButton=document.querySelector('.clearButton');
clearButton.addEventListener('click',clear);
function clear(){
    const gridContainerContent=document.querySelectorAll('.gridContainer div');
    for(let i=0;i<gridContainerContent.length;i++){
        gridContainerContent[i].style.backgroundColor='white';
    }
}

//RGB button
const rgbButton=document.querySelector('.rgbButton');

rgbButton.addEventListener('click',rgbColor);
function rgbColor(){
    const gridContainerContent=document.querySelectorAll('.gridContainer div');
    function randomColor(){
        let randomNum = Math.floor(Math.random()*256);
        return randomNum;
    }
    for(let i=0;i<gridContainerContent.length;i++){
    gridContainerContent[i].addEventListener('mouseover',(event)=>{gridContainerContent[i].style.backgroundColor=`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;});
    }
}

//Gradient button
const gradientButton = document.querySelector('.gradientButton')
gradientButton.addEventListener('click',gradient);
function gradient(){
    const gridContainerContent=document.querySelectorAll('.gridContainer div');
    let color=255;
    function gradientGenerator(){
        if(color<=0){
            color=255;
        }   
        else if(color>0){
            color=(color-(color/100*10)).toFixed();
        }
        return color;
    }
    for(let i=0;i<gridContainerContent.length;i++){
    gridContainerContent[i].addEventListener('mouseover',(event)=>{gridContainerContent[i].style.backgroundColor=`rgb(${gradientGenerator()}, ${gradientGenerator()}, ${gradientGenerator()})`;})
    }
}
