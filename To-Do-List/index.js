const add = document.getElementById("add");
const head = document.getElementById("head");
const desc = document.getElementById("desc");
const box2 = document.getElementById("box2");

const savedtask=JSON.parse(localStorage.getItem("To-Do")) || []
function displaytask(){
box2.innerHTML="";
if(savedtask.length===0){
    box2.innerHTML = "<p>No tasks to display.</p>";
}
else{
    savedtask.forEach(([headc,descc],index)=>{
        box2.innerHTML+=`<h3> ${headc} </h3>
        <p> ${descc} </p>
        <button class="btn" onclick="deletetask(${index})">Delete Task</button>
`
    })
}
}
displaytask();


add.addEventListener("click",(e)=>{
    e.preventDefault() // to stop refershing page
   headc=head.value
   descc=desc.value
   savedtask.push([headc, descc]);
//    Saving in localStorage
    localStorage.setItem("To-Do",JSON.stringify(savedtask));

    displaytask();

    head.value="";
    desc.value="";
})

function deletetask(index) {
    savedtask.splice(index, 1); 
    localStorage.removeItem("To-Do");
    displaytask(); 
}
