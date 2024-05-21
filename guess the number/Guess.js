let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#submit');
const userinput=document.querySelector('#guessFeild');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const startover=document.querySelector('.resultParas');
const loworhigh=document.querySelector('.lowOrHi');

const p=document.createElement('p');

let prevguess=[];
let numguess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        let guess=parseInt(userinput.value);
        validfunction(guess)
    })
}
function validfunction(guess){
    if(isNaN(guess)){
        alert('enter valid number');
    }else if(guess<1){
        alert('enter in range');
    }else if(guess>100){
        alert('enter in range');
    }else{
        prevguess.push(guess)
        if(numguess===11){
            displayguess(guess)
            displaymessage(`Game Over. Number was ${randomNumber}`);
            endGame();
        }
        else{
            displayguess(guess);
            checkfunction(guess);
        }
    }
}
function checkfunction(guess){
    if(guess===randomNumber){
        displaymessage(`Your Guess was Right`);
        endGame();
    }else if(guess<randomNumber){
        displaymessage(`your number was too low`);
    }else if(guess>randomNumber){
        displaymessage(`your number was too high`);
    }
}
function displayguess(guess){
    userinput.value=''
    guessslot.innerHTML +=`${guess}, `;
    numguess++;
    remaining.innerHTML=`${11-numguess}`;
}
function displaymessage(message){
    loworhigh.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
    userinput.value="";
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="startGame">Start Game</h2>`;
    startover.appendChild(p);
    palyGame=false;
    startGame();
}
function startGame(){
    let nemGame=document.querySelector("#startGame");
    nemGame.addEventListener('click',(e)=>{
        randomNumber=parseInt(Math.random()*100+1);
        prevguess=[];
        numguess=1;
        guessslot.innerHTML='';
        remaining.innerHTML=`${11-numguess}`;
        userinput.removeAttribute('disabled','');
        startover.removeChild(p);
        palyGame=true;
    })
}