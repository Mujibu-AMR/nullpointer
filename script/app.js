import data from "../assets/data.json" with { type : 'json'};

var new_ele = document.createElement("p");
new_ele.innerHTML = "<p>" + JSON.stringify(data) + "</p>"
document.body.appendChild(new_ele)
console.log(data)