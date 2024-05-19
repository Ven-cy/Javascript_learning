const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id === "gray"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id === "white"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id === "blue"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id === "yellow"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id === "pink"){
            body.style.backgroundColor=e.target.id;
        }
    })
});