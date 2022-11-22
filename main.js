const body=document.querySelector('body');
body.style.display='flex';
body.style.justifyContent='center';
body.style.margin='50px 0px 50px 0px'

const gridContainer=document.querySelector('.gridContainer');
gridContainer.style.display='flex';
gridContainer.style.flexWrap='wrap';
gridContainer.style.borderStyle='solid';
gridContainer.style.borderColor='lightgrey';

let x=100;
gridContainer.style.width=`${x*5}px`
gridContainer.style.height=`${x*5}px`;
let totalGrid=x*x;
for(i=0;i<totalGrid;i++){
    const grid = document.createElement('div');
    gridContainer.appendChild(grid);

    //grid.style.borderStyle='solid';
    grid.style.height='5px';
    grid.style.width='5px';
    //grid.style.borderWidth='1px';
    //grid.style.borderColor='lightgrey'

    grid.addEventListener('mouseover',(event)=>{
        event.stopPropagation();
        grid.style.backgroundColor='black';
    })
    
}

//let x = 32;
// for(let i=0;i<x;i++){
//     const columnDiv=document.createElement('div');
//     gridContainer.appendChild(columnDiv);
//     columnDiv.style.display='flex';

//     columnDiv.addEventListener('click',(event)=>{
//         event.stopPropagation()
//         columnDiv.style.backgroundColor='black';
//     });

//     for(let i=0;i<x;i++){
//         const rowDiv=document.createElement('div')
//         columnDiv.appendChild(rowDiv);
//         rowDiv.style.width='10px';
//         rowDiv.style.height='10px';
//         rowDiv.style.borderStyle='solid';
//         rowDiv.style.borderWidth='1px';
//         rowDiv.style.borderColor='grey';
//         rowDiv.style.display='flex'

//         rowDiv.addEventListener('click',(event)=>{
//             event.stopPropagation()
//             rowDiv.style.backgroundColor='black';
//         });
//     }    
// }








