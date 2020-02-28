const elementOne = document.getElementById("elementOne");
const elementTwo = document.getElementById("elementTwo");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mult = document.getElementById("mult");
const part = document.getElementById("part");
const score = document.getElementById("score");

plus.addEventListener('click', function(){
    var x = document.createElement("div");
    x.innerText = elementOne.value + " + ";
    x.innerText += elementTwo.value + " = ";
    var y = document.createElement("div");
    y = parseInt(elementOne.value) + parseInt(elementTwo.value);
    x.innerText += y;
    score.appendChild(x);
});

minus.addEventListener('click', function(){
    var x = document.createElement("div");
    x.innerText = elementOne.value + " - ";
    x.innerText += elementTwo.value + " = ";
    var y = document.createElement("div");
    y = parseInt(elementOne.value) - parseInt(elementTwo.value);
    x.innerText += y;
    score.appendChild(x);
});

mult.addEventListener('click', function(){
    var x = document.createElement("div");
    x.innerText = elementOne.value + " * ";
    x.innerText += elementTwo.value + " = ";
    var y = document.createElement("div");
    y = parseInt(elementOne.value) * parseInt(elementTwo.value);
    x.innerText += y;
    score.appendChild(x);
});

part.addEventListener('click', function(){
    var x = document.createElement("div");
    x.innerText = elementOne.value + " / ";
    x.innerText += elementTwo.value + " = ";
    var y = document.createElement("div");
    y = parseInt(elementOne.value) / parseInt(elementTwo.value);
    x.innerText += y;
    score.appendChild(x);
});