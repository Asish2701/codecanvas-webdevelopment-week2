const inputfield= document.getElementById("input-field");
const todocontainer= document.getElementById("todo-container");
const deadlineInput = document.getElementById('deadlineInput').value;
function addTodo(){
    if(inputfield.value === '' ){
        alert("You must write something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputfield.value;
        todocontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
        
    }
    inputfield.value=null
    saveData()
}
todocontainer.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

},false);
function saveData(){
    localStorage.setItem("data",todocontainer.innerHTML);
}
function showtask(){
    todocontainer.innerHTML=localStorage.getItem("data");
}