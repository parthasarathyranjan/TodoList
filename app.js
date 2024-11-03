let button=document.getElementById('add')
let todoList=document.getElementById('todoList')
let input=document.getElementById('input')

//managing todolist in array and also for local storage
let todos=[]

window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || []
   // console.log(todos)
   todos.forEach(todo =>addtodo(todo))
}

button.addEventListener('click',function(){
    todos.push(input.value)
    addtodo(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    input.value=''
})

//displaying todo in the web
function addtodo(todo){
    let paragraph=document.createElement('p')
    paragraph.innerText=todo;
    todoList.appendChild(paragraph);  
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration='line-through'
        removetodo(todo)
    })
    paragraph.addEventListener('dblclick',()=>{ 
        todoList.removeChild(paragraph)
        removetodo(todo)
    })
}
function removetodo(todo){
    let indexval=todos.indexOf(todo)
    //check whether the element is already deleted
    if(indexval>-1)
        todos.splice(indexval,1)    

    //removing the completed elements(completed tasks) from the local storage
    localStorage.setItem('todos',JSON.stringify(todos))
}
//to retain data even after refreshing the page,we need a local storage





