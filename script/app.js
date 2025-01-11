import data from "../assets/data.json" with { type : 'json'};
import playbook_list from "../assets/books/book_list.json" with { type : 'json'};

console.log(playbook_list.length);

var playbooks_data = Array(playbook_list.length);

for(var i = 0; i < playbook_list.length; i ++) {
    var playbook_path = "../assets/books/" + playbook_list[i].bookName.toLowerCase() + ".json" 
    console.log(playbook_path);
    var response = await fetch(playbook_path);
    // playbooks_data[i] = await response.json();
    playbooks_data[i] = await response.json();
}
console.log(playbooks_data)
var new_ele = document.createElement("p");
new_ele.innerHTML = "<p>" + JSON.stringify(data) + "</p>"
document.body.appendChild(new_ele)
// console.log(data)