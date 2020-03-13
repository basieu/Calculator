const result = document.getElementById("result");
const clear = document.getElementById("clear");

const btns = document.getElementById("panel").getElementsByClassName("btn");
const arr = document.getElementById("numbers").getElementsByClassName("digits");

const arr_1 = new Array();
const arr_2 = new Array();

for (i = 0; i < arr.length; i++){
    arr_1.push(arr[i]);
}

for (i = 0; i < btns.length; i++){
    arr_2.push(btns[i]);
}

arr_1.forEach(function(i){
    i.addEventListener('click', function(){
        score.innerText += parseInt(i.innerText);
    });
});

arr_2.forEach(function(j){
    j.addEventListener('click', function(){
        score.innerText += j.innerText;
    });
});

clear.addEventListener('click', function(){
    score.innerHTML = ' ';
});

result.addEventListener('click', function(){
    var b = eval(score.innerText);
    score.innerText += "=" + b;
});