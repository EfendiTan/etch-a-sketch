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

const sizeButton=document.querySelector('.sizeButton');
sizeButton.addEventListener('click',getNewSize);

gridContainer.style.width=`480px`
gridContainer.style.height=`480px`;
function setGrid(size){
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

//clear button
const clearButton=document.querySelector('.clearButton');
clearButton.addEventListener('click',clear);
function clear(){
    const gridContainerContent=document.querySelectorAll('.gridContainer div');
    for(let i=0;i<gridContainerContent.length;i++){
        gridContainerContent[i].style.backgroundColor='white';
    }
}
