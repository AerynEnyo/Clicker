// Variables
let v = {
    multi: 1,
    money: 0,
}

let add1cost = 10;
let add25cost = 20;

var timer = setInterval(moneypersec, 1000);
var timer = setInterval(UIUpdate, 67);

function save(){
    localStorage.setItem("variables", JSON.stringify(v))
}

function load(){
    v = JSON.parse(localStorage.getItem("variables"))
}

function moneypersec(){
    v.money += 1 * v.multi;
}

function add1multi(){   
    if (v.money >= add1cost) {
        v.money -= add1cost
        v.multi++;
    }
}

function add25multi(){   
    if (v.money >= add25cost) {
        v.money -= add25cost
        v.multi += 2.5;
    }
}

function UIUpdate(){
    document.getElementById("clickcount").innerHTML = 'Multiplier: ' + v.multi;
    document.getElementById("money").innerHTML = 'Money: ' + v.money;

    if (v.money >= add1cost) {
        document.getElementById("add1").toggleAttribute("disabled", false);
    }
    else {
        document.getElementById("add1").toggleAttribute("disabled", true);
    }

    if (v.money >= add25cost) {
        document.getElementById("add25").toggleAttribute("disabled", false);
    }
    else {
        document.getElementById("add25").toggleAttribute("disabled", true);
    }

}