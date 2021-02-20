

let cursors = {
    currentValue: 0,
    cost: 15,

}

let grandmas = {
    currentValue: 0,
    cost: 150,
}

let generators = {
    cursors,
    grandmas
}

var brightIdeas = 0;
var clickingPower= 10;


function buyCursor() {
    let cursorCost = cursors.cost *1.15 ** cursors.currentValue;
    if (brightIdeas >= cursorCost){
            brightIdeas -= cursorCost;
            cursors.currentValue += 1;
            reRender();


    }
}

function buyGrandma() {
    let grandmaCost = grandmas.cost * 1.25 ** grandmas.currentValue;
    if (brightIdeas >= grandmaCost){
            brightIdeas -= grandmaCost;
            grandmas.currentValue += 1;
            reRender();

    }
}
function reRender() {
    document.getElementById('brightIdeas').innerHTML = brightIdeas;
    document.getElementById('grandmaCost').innerHTML = grandmas.cost * 1.25 ** grandmas.currentValue;;
    document.getElementById('grandmas').innerHTML = grandmas.currentValue;
    document.getElementById('cursorCost').innerHTML = cursors.cost *1.15 ** cursors.currentValue;

    document.getElementById('cursors').innerHTML = cursors.currentValue;
    document.title = brightIdeas + "Ideas - the main stream"
    updateIdeasPerSecond();
}


function addToBrightIdeas(amount) {
    brightIdeas += amount;
    document.getElementById('brightIdeas').innerHTML = brightIdeas;
}

function updateIdeasPerSecond(){
    brightIdeasPerSecond = cursors.currentValue + grandmas.currentValue * 25;
    document.getElementById("brightIdeasPerSecond").innerHTML = brightIdeasPerSecond;
}

setInterval(function() {
    brightIdeas += cursors.currentValue;
    brightIdeas += grandmas.currentValue * 25;
    reRender()
}, 1000);
