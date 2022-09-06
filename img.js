let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let field1 = document.getElementById("field1")
let field2 = document.getElementById("field2")
field1.innerHTML = "Celsius"
field2.innerHTML = "Farenheit"

let reverse = document.getElementById("reverse")

let btn = document.getElementById("button")

btn.addEventListener("click",function(){
    let value = input1.value
    let conversion = (value*1.8)+32;
    input2.value = conversion
})


reverse.addEventListener("click",function(){
    if(field1.innerHTML == "Celsius" && field2.innerHTML == "Farenheit"){
        field1.innerHTML = "Farenheit";
        field2.innerHTML = "Celsius"
    }
    else if(field1.innerHTML == "Farenheit" && field2.innerHTML == "Celsius"){
        field1.innerHTML == "Celsius"
        field2.innerHTML == "Farenheit"
    }
   
})

