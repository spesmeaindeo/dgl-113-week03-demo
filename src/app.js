//global array for to do list functions
let todos=[];
let count=0;

function addToDo(){
    console.log('addToDo()');

//drop down menu functions
    let durationEl=document.getElementById('duration');
    let duration=durationEl.value;

//description input box function
    let descritionEl=document.getElementById('description');
    let description=descriptionEl.value;  

    console.log(duration,description);

 //variable for list input function to push to table row and count number of items
 //use of template expression using descriptions. HTML markup per row
 count+=1;
 todos.push('<tr><th>${count}</th><td>${duration}</td><td>${description}</td></tr>');
}

//clear button function
function clearToDos(){
    console.log('clearToDos()');
}