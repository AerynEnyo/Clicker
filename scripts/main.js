// Variables
let v = {
    darkModeOn: false,
    multi: 1,
    money: 0
}

let add1cost = 10;
let add25cost = 20;

var timer = setInterval(moneypersec, 1000);
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