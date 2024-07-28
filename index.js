const input=document.querySelector(".input");
const guess=document.querySelector(".btn");
const reset=document.querySelector(".reset");
const wrng=document.querySelector(".wrng");
const noofguess=document.querySelector(".guess");


var answer=Math.floor(Math.random()*100)+1;
guess.addEventListener("click",func);
var guesses=0;

function func(){
    if(input.value>=1 && input.value<=100){
        if(input.value>answer){
            wrng.innerHTML="Too High."
            guesses++;

        }
        else if(input.value<answer){
            wrng.innerHTML="Too Low."
            guesses++;
        }
        else{
            wrng.innerHTML="Congratulations.....This is correct."
            alert(`You got the correct answer in ${guesses} guesses and the answer is ${answer}.`);
        }
        noofguess.innerHTML=`No of guesses:${guesses};`
    }
    else{
        wrng.innerHTML="Please enter number between 1 and 100."
    }
}
reset.addEventListener("click",()=>{
    wrng.innerHTML="Let's start."
    noofguess.innerHTML="No of guesses:0";
    input.value="";
    guesses=0;
    answer=Math.floor(Math.random()*100)+1;

})

