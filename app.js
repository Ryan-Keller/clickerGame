
let bigAssButton = document.getElementById("big-ass-button");
bigAssButton.addEventListener("click", addToBrightIdeas)

let cursors = new Generator(15, 1.15);

let grandmas = new Generator(150, 1.25);

let generators = {
    cursors,
    grandmas
}

var brightIdeas = 0;
var brightIdeasPerSecond = 0;
var clickingPower= 10;


function buyCursor() {
    if (brightIdeas >= cursors.cost()){
            brightIdeas -= cursors.cost();
            cursors.currentValue += 1;
            reRender();


    }
}

function buyGrandma() {
    if (brightIdeas >= grandmas.cost()){
            brightIdeas -= grandmas.cost();
            grandmas.currentValue += 1;
            reRender();

    }
}
function reRender() {
    document.getElementById('brightIdeas').innerHTML = Math.floor(brightIdeas);
    document.getElementById('grandmaCost').innerHTML = grandmas.cost();
    document.getElementById('grandmas').innerHTML = grandmas.currentValue;
    document.getElementById('cursorCost').innerHTML = cursors.cost();

    document.getElementById('cursors').innerHTML = cursors.currentValue;
    document.title = Math.floor(brightIdeas) + " Ideas - the main stream"
    updateIdeasPerSecond();
}


function addToBrightIdeas() {
    brightIdeas += clickingPower;
    document.getElementById('brightIdeas').innerHTML = brightIdeas;
}

function updateIdeasPerSecond(){
    brightIdeasPerSecond = cursors.currentValue + grandmas.currentValue * 25;
    document.getElementById("brightIdeasPerSecond").innerHTML = brightIdeasPerSecond;
}
/*
setInterval(function() {
    brightIdeas += cursors.currentValue;
    brightIdeas += grandmas.currentValue * 25;
    reRender()
}, 1000);
*/
let previousTime = 0
requestAnimationFrame(tick)

function tick(currentTime) {
    let deltaT = (currentTime - previousTime) / 1000;
    brightIdeas += deltaT * brightIdeasPerSecond;
    previousTime = currentTime;
    reRender();
    requestAnimationFrame(tick);
}
