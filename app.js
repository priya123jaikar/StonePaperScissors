let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComputerChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("Oops!! Game Drawn!!");
    msg.innerText = "Oops!! Game Drawn!!"
    msg.style.backgroundColor = "#081b31"
    
}

const showWinner = (userWin, userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        console.log("Congratulations ! You Won :) ");
        msg.innerText = `Congratulations ! You Won :) Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = " green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Ohh Noo :( You lose :( ")
        msg.innerText =  `Ohh Noo !!  You lose :(Computer ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
    console.log("user choice = " , userChoice)
    //Generate computer choice
    const compChoice = getComputerChoice();
    console.log("computer choice " ,compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked!" , userChoice);
        playGame(userChoice);
    })
})