let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let into = document.getElementById("into");
let divide = document.getElementById("divide");
let ans = document.getElementById("answer");

function fun_add(){
    let result = parseInt(num1.value) + parseInt(num2.value);
    ans.innerText = result;
    
}
function fun_subtract(){
    let result = parseInt(num1.value) + parseInt(num2.value);
    ans.innerText = result;
    
}
function fun_into(){
    let result = parseInt(num1.value) + parseInt(num2.value);
    ans.innerText = result;
    
}
function fun_divide(){
    let result = parseInt(num1.value) + parseInt(num2.value);
    ans.innerText = result;
    
}

add.onclick = fun_add()
add.onclick = fun_subtract()
add.onclick = fun_into()
add.onclick = fun_divide()



