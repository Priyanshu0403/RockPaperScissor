let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =()=>{
    //rock,paper,scissor
    const option = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);  //this floor method in math class removes the no used decimal numbers
    //and random function gives any number between 0-1 so we multiplied it with 3
    //which will give number ranging between 0-3 thus the numbers due to floor function will be
    //  0/1/2 
    return option[randIdx];
}

const drawGame =()=>{
    console.log("Game was Draw");
    msg.innerText="Game Draw. Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! (${userChoice} beats ${compChoice})`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose");
        msg.innerText="You Lost";
        msg.innerText=`You Lost. (${compChoice} beats ${userChoice})`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (userChoice)=>{
    console.log("user choice :",userChoice);

    //computer choice
    const compChoice = genCompChoice();//calling the computer choice funtion here and storing in the variable
    console.log("computer choice :",compChoice);

    //Draw Condition
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice ==="scissor"? false : true;
        }else{
            userWin =compChoice==="rock"? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); //calling the function(arrow function ) declared above
    })
})