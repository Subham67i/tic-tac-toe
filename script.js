let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGame = document.getElementById("new-gameBtn");
// let msgCon = document.querySelector(".msg-container");
let msgWin = document.getElementById("winer-msg");

let turnO = true; // playerO  playerX

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        // console.log('click');
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const  checkWinner = () => {
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern [1]].innerText,
        //             boxes[pattern[2]].innerText);

        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        
        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                console.log("winer",pos1Value);
                showWinnner(pos1Value);
            };
        };
    };
};

const showWinnner = (winer) => {
    msgWin.innerText = `Congratuation Winner is = "${winer}"`;
    // msgCon.classList.remove("hidden");
    disabledBtn();
};

const disabledBtn = () => {
    for(box of boxes){
        box.disabled = true;
    };
};

const resetGame = () => {
    turnO = true;
    enabledBtn();
    // msgCon.classList.add("hidden");
    msgWin.innerText ="";
}

const enabledBtn = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
