const player = ['X','O'];
let turn = 0;

para = document.createElement("p");
para.innerHTML = "FUCK YOU ALL";
function player(id){
    document.getElementById(id).innerHTML = "X";
    turn = 1 - turn;
}