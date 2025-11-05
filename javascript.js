const button = document.getElementById("button");
let stat = document.getElementById("stat");
let booststat = document.getElementById("booststat");
let rebirthstat = document.getElementById("rebirthstat");
const REBIRTH = document.getElementById("rebirth");
const BOOST = document.getElementById("boost");

REBIRTH.setAttribute("class", "opacity")
BOOST.setAttribute("class", "opacity")

button.addEventListener("click", onClick);
BOOST.addEventListener("click", addBoost);
REBIRTH.addEventListener("click", addRebirth);

let clickcount = 2;
let boostcount = 0;
let rebirthcount = 0;
function onClick() {
    clickcount = clickcount + (boostcount * boostcount + 1) * (rebirthcount + 1);
    stat.innerHTML = "Clicked: " + clickcount;

    boost();
    rebirth();
    
}
function boost() {
    if (clickcount >= (boostcount + 1) * 50) {
        BOOST.removeAttribute("class", "opacity")
    }
}
function rebirth() {
    if (clickcount >= (boostcount + 1) * 50 && boostcount >= (rebirthcount + 1) * 5) {
        REBIRTH.removeAttribute("class", "opacity")
    }
}

function addBoost() {
    if (clickcount >= (boostcount + 1) * 50) {
        clickcount = 0;
        stat.innerHTML = "Clicked: " + clickcount;
        boostcount++;

        booststat.innerHTML = "Boost: " + boostcount;
    }
    REBIRTH.setAttribute("class", "opacity");
    BOOST.setAttribute("class", "opacity");
}

function addRebirth() {
    if (clickcount >= (boostcount + 1) * 50 && boostcount >= (rebirthcount + 1) * 5) {
        clickcount = 0;
        stat.innerHTML = "Clicked: " + clickcount;

        boostcount = 0;
        booststat.innerHTML = "Boost: " + boostcount;

        rebirthcount++;
        console.log(rebirthcount)
        rebirthstat.innerHTML = "Rebirth: " + rebirthcount;
    }
    REBIRTH.setAttribute("class", "opacity");
    BOOST.setAttribute("class", "opacity");
}


