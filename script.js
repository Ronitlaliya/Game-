let boxes = document.querySelectorAll(".box");
let resetGamebtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");
let player1 = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const NewGame = () => {
    player1 = true;
    enableboxes();
    msgContainer.classList.add("hide");
};

const resetGame = () => {
    player1 = true;
    enableboxes();
    msgContainer.classList.add("hide");
   
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
       if(player1){
        box.innerText = "O";
        player1 = false;
       } else{
        box.innerText ="X";
        player1 = true;
       }
       box.disabled = true;
       checkwinner();
    });
});    
const disabledBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
      
    }
    
};

const enableboxes =() => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (winner) => {
     msg.innerText  = `congratulation! The winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disabledBoxes();
   
}

    const checkwinner = () => {
        for ( let pattern of winpatterns)  {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            
            if(pos1val != "" && pos2val != "" && pos3val != "" ){
                if (pos1val === pos2val && pos2val === pos3val ){
                    console.log("winner",pos1val);
                    showwinner(pos1val);
                }
            }

        }
    };

    newGamebtn.addEventListener("click", NewGame);
    resetGamebtn.addEventListener("click", resetGame);
