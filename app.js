let gameSeq=[];
let userSeq=[];

let start=false;
let level=0;
let highScore=0;

let btns =["red","green","yellow","purple"];
let h2=document.querySelector('h2');
let h3=document.querySelector('h3');
console.log(h3.innerText);

document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelUp();
    }       
});

 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
 }

 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
 }

function levelUp() {
  userSeq=[];
   level++;
   h2.innerText=`level ${level}`; 
   let randIdx=Math.floor(Math.random()*3);
   let randomColor=btns[randIdx];
   let randbtn=document.querySelector(`.${randomColor}`);
   gameSeq.push(randomColor);
   gameFlash(randbtn);
   //code for highscore 
    if(highScore<level) {
            console.log("Your highscore was",level);
            highScore=level;
        }else{
            console.log("Your highscore was",highScore);
            
        }
        h3.innerText=`highscore is ${highScore}`;
}


function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
        setTimeout(levelUp, 1000);
        //was trying code of highscore but this is wrong
        // if(highScore<level) {
        //     console.log("Your highscore was",level);
        //     highScore=level;
        // }else{
        //     console.log("Your highscore was",highScore)
        // }
    }
    }else{
        h2.innerHTML=`Game over!. Your score was <b>${level}</b> <br> Press any key to start`
        let currentScore=`${level}`;
        h3.innerText=`highscore is ${highScore}`    
        console.log("current score is",currentScore)
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();

        //was trying code of highscore but this is wrong
        // if(highScore<level) {
        //     console.log("Your highscore was",level);
        //     highScore=level;
        // }else{
        //     console.log("Your highscore was",highScore)
        // }
        //HighScore(currentScore);
    }
}


function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
