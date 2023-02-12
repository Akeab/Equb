var button = document.getElementById("button");
button.addEventListener("click", equbDetail);

var row=1;
let names = [];
function equbDetail(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var amount = document.getElementById("amount").value;

    if(!name || !age || !gender || !amount){
        alert("please fill all the boxs");
        return;
    }

var equbList = document.getElementById("equbList");

var newRow = equbList.insertRow(row);

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);

cell1.innerHTML = name;
cell2.innerHTML = age;
cell3.innerHTML = gender;
cell4.innerHTML = amount;

row++;
names.push(name);
}


console.log(names)
let btn = document.getElementById("btn");
let output = document.getElementById("output");


btn.addEventListener("click", function(){
    var randomname = names[Math.floor(Math.random() * names.length)] + "!!!!";
    output.innerHTML = randomname + "wins this rounds EQUB";
})
