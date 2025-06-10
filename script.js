boxes=document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor ='#caf0f8';
    });

    box.addEventListener('mouseout',function(){
        box.style.backgroundColor = 'white';
    });
    
});

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

function check(){

    let tie=0;

        boxes.forEach(box =>{
            if(box.innerText ==='X' || box.innerText ==='O'){
                tie++;
            }
        });

    if(tie===9){
        boxes.forEach(box =>{
            box.innerText='';
            box.disabled=false;
            });

            alert("It's a TIE !");

            return;
    }


    for(pos of win){

        if(
            boxes[pos[0]].innerText==='X' &&
            boxes[pos[1]].innerText==='X' &&
            boxes[pos[2]].innerText==='X'
        ){
            alert('X wins !');

            boxes.forEach(box =>{
            box.innerText='';
            box.disabled=false;
            });

            return;
            
        }else if(
            boxes[pos[0]].innerText==='O' &&
            boxes[pos[1]].innerText==='O' &&
            boxes[pos[2]].innerText==='O'
        ){
            alert('O wins !');
            boxes.forEach(box =>{
            box.innerText='';
            box.disabled=false;
            });
    
            return;
        }
    }
}


let chance=1;

boxes.forEach(box =>{
    box.addEventListener('click',()=>{
        if(chance == 1){
            box.innerText='X';
            chance=0;
            box.disabled=true;
        }else{
            box.innerText='O';
            chance=1;
            box.disabled=true;
            
        }

        check();
    });
    
});

reset=document.querySelector('#reset');

reset.addEventListener('click',() =>{
    boxes.forEach(box =>{
        box.innerText='';
        box.disabled=false;
    });
});
