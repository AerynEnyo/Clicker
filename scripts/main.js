// Variables
let v = {
    darkModeOn: false,
    multi: 1,
    money: 0
}

let add1cost = 10;
let add5cost = 50;
let add10cost = 100;
let add25cost = 250;
let add50cost = 500;

//var timer = setInterval(moneypersec, 1000);
var timer = setInterval(UIUpdate, 67);
var timer = setInterval(save, 30000);

function load(){
    if(localStorage.getItem("variables") === null || localStorage.getItem("variables") === "null"){
        let v = {
            darkModeOn: false,
            multi: 1,
            money: 0
        }
        save();
    }else{
        v = JSON.parse(localStorage.getItem("variables"));
    }
}

function save(){
    localStorage.setItem("variables", JSON.stringify(v))
}

function ToggleDarkMode() {
    if(v.darkModeOn == false) {
        var element = document.body;
        element.classList.toggle("dark-mode");
        v.darkModeOn = true;
        console.log("dark on");
    }else {
        var element = document.body;
        element.classList.toggle("dark-mode");
        v.darkModeOn = false;
        console.log("dark off");
    }
    }

function ColorOnLoad() {
        if (v.darkModeOn == true) {
            var element = document.body;
            element.classList.toggle("dark-mode");
            console.log("dark on")
        }    
    }

function moneypersec(){
    v.money += 1 * v.multi;
}

function moneyclick() {
    v.money += 1 * v.multi;
}

function add1multi(){   
    if (v.money >= add1cost) {
        v.money -= add1cost
        v.multi++;
        add1cost = (add1cost*1.1).toFixed(1);
        document.getElementById("add1").innerHTML = 'Add 1 <br> Cost: ' + add1cost;
    }
}

function add5multi(){   
    if (v.money >= add5cost) {
        v.money -= add5cost
        v.multi += 5;
        add5cost = (add5cost*1.1).toFixed(1);
        document.getElementById("add5").innerHTML = 'Add 5 <br> Cost: ' + add5cost;
    }
}

function add10multi(){   
    if (v.money >= add10cost) {
        v.money -= add10cost
        v.multi += 10;
        add10cost = (add10cost*1.1).toFixed(1);
        document.getElementById("add10").innerHTML = 'Add 10 <br> Cost: ' + add10cost;
    }
}

function add25multi(){   
    if (v.money >= add25cost) {
        v.money -= add25cost
        v.multi += 25;
        add25cost = (add25cost*1.1).toFixed(1);
        document.getElementById("add25").innerHTML = 'Add 25 <br> Cost: ' + add25cost;
    }
}

function add50multi(){   
    if (v.money >= add50cost) {
        v.money -= add50cost
        v.multi += 50;
        add50cost = (add50cost*1.1).toFixed(1);
        document.getElementById("add50").innerHTML = 'Add 50 <br> Cost: ' + add50cost;
    }
}

function UIUpdate(){
    document.getElementById("clickcount").innerHTML = 'Multiplier: ' + v.multi;
    document.getElementById("money").innerHTML = 'Money: ' + v.money.toFixed(2);

    if (v.money >= add1cost) {
        document.getElementById("add1").toggleAttribute("disabled", false);
    }
    else {
        document.getElementById("add1").toggleAttribute("disabled", true);
    }

    if (v.money >= add5cost) {
        document.getElementById("add5").toggleAttribute("disabled", false);
    }
    else {
        document.getElementById("add5").toggleAttribute("disabled", true);
    }

    if (v.money >= add10cost) {
        document.getElementById("add10").toggleAttribute("disabled", false);
    }
    else {
        document.getElementById("add10").toggleAttribute("disabled", true);
    }

    if (v.money >= add25cost) {
        document.getElementById("add25").toggleAttribute("disabled", false);
    }
    else {
        document.getElementById("add25").toggleAttribute("disabled", true);
    }

    if (v.money >= add50cost) {
        document.getElementById("add50").toggleAttribute("disabled", false);
    }
    else {
        document.getElementById("add50").toggleAttribute("disabled", true);
    }
}