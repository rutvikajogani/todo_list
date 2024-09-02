const list = document.getElementById("list");

const valueList = [];


function deleteItem( element,index) {
   
    valueList.splice(index, 1);
  element.parentNode.remove();
}

function displayTasks() {

    let text = "";
    for (let i = 0; i < valueList.length; i++) {
        const temp = `
        <div>
            <label for="">
                <input type="checkbox">
                ${valueList[i]}
            </label>
            <button onclick="deleteItem(this,${i})">delete</button>
        </div>
        `

        text  += temp;
    }

    list.innerHTML = text;
    document.getElementById("input").value = "";

}

function addTask() {
    const inputElement = document.getElementById("input");
    if(inputElement.value.trim()){
    valueList.push(inputElement.value);
    displayTasks();
    }
    document.getElementById("input").value = "";

}


document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        addTask(); 
    }
});