// Variables
let multi = 1;
let money = 0;

let add1cost = 10;
let add25cost = 20;

var timer = setInterval(moneypersec, 1000);
var timer = setInterval(UIUpdate, 67);

function add1multi(){   
    if (money >= add1cost) {
        money -= add1cost
        multi++;
    }
}

function add25multi(){   
    if (money >= add25cost) {
        money -= add25cost
        multi += 2.5;
    }
}

function moneypersec(){
    money += 1 * multi;
}

function UIUpdate(){
    document.getElementById("clickcount").innerHTML = 'Multiplier: ' + multi;
    document.getElementById("money").innerHTML = 'Money: ' + money;

    if (money >= add1cost) {
        document.getElementById("add1").toggleAttribute("disabled", false);
    }
    else {
        document.getElementById("add1").toggleAttribute("disabled", true);
    }

    if (money >= add25cost) {
        document.getElementById("add25").toggleAttribute("disabled", false);
    }
    else {
        document.getElementById("add25").toggleAttribute("disabled", true);
    }

}