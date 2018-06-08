var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
var completedTasksHolder=document.getElementById("completed-tasks");


//New task list item
var createNewTaskElement=function(taskString){
	

	var listItem=document.createElement("li");
	


	var checkBox=document.createElement("input");
	

	var label=document.createElement("label");

	var editInput=document.createElement("input");
	
	var editButton=document.createElement("button");

	
	var deleteButton=document.createElement("button");

	label.innerText=taskString;

	//Each elements, needs appending
	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";



	
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	
	return listItem;
}



var addTask=function(){
		
	//console.log("Add Task...");

	//Create a new list item with the text from the #new-task:
	var listItem=createNewTaskElement(taskInput.value);
	if (taskInput.value === '') {
		alert("Võiks midagi kirjutada?");
		console.log('alert')}	

	//Append listItem to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem)
 //incompleteTaskHolder.appendChild(listItem)
	bindTaskEvents(listItem, taskCompleted);
	
	taskInput.value="";
	
}

//Edit an existing task.

var editTask=function(){
  //console.log("Edit Task...");
  


  var listItem=this.parentNode;

  var editInput=listItem.querySelector('input[type=text]');
  var label=listItem.querySelector("label");
  var containsClass=listItem.classList.contains("editMode");
		
	if(containsClass){

		
		//label becomes the inputs value.
			label.innerText=editInput.value;
	}else{
		editInput.value=label.innerText;
	}

	//toggle .editmode on the parent.
	listItem.classList.toggle("editMode");
}




//DElate
var deleteTask=function(){
		//console.log("Delete Task...");

	var listItem=this.parentNode;
	var ul=listItem.parentNode;		//remove ul.
	ul.removeChild(listItem);

}



//Mark task completed
var taskCompleted=function(){
		//console.log("Complete Task...");
	
	//Append the task list item to the #completed-tasks
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
	//console.log("Incomplete Task...");
	//Mark task as incomplete.
	//When the checkbox is unchecked
	//Append the task list item to the #incomplete-tasks.
	var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);
}



/*var ajaxRequest=function(){
	//console.log("AJAX Request");
}*/

//The glue to hold it all together.


//Set the click handler to the addTask function.
//addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
//addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	//console.log("bind list item events");
//select ListItems children
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");


			//Bind editTask to edit button.
			editButton.onclick=editTask;
			//Bind deleteTask to delete button.
			deleteButton.onclick=deleteTask;
			//Bind taskCompleted to checkBoxEventHandler.
			checkBox.onchange=checkBoxEventHandler;
			
}
//$("#remove").empty();

//removeButton.removeEventListener("click",removeTasks);
//cycle over incompleteTaskHolder ul list items
	//for each list item
	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		//bind events to list items chldren(tasksCompleted)
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}
	function clear() {
		var listItem = document.getElementById("ListItem");
		listItem.removeChild(listItem.child[0]);}




//cycle over completedTasksHolder ul list items
	for (var i=0; i<completedTasksHolder.children.length;i++){
	//bind events to list items chldren(tasksIncompleted)
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}

	/*Element.listItem.remove = function() {
		this.parentElement.removeChild(this);
	}
	NodeList.listItem.remove = HTMLCollection.listItem.remove = function() {
		for(var i = this.length - 1; i >= 0; i--) {
			if(this[i] && this[i].parentElement) {
				this[i].parentElement.removeChild(this[i]);
			}
		}
	}*/
	/*var element = document.getElementById('listItem');
	element.parentNode.removeChild(element);/*

	document.getElementById("listItem").remove();*/



	
//Remove all tasks at once, coldn´t get it to work really 
var clear=function(clear){
	console.log("Delete Task...");

	var listItem=this.parentNode;
	var ul=listItem.parentNode;
	
	list.removeChild(listItem[0]);

}

/*(function () {
	("#btnDeleteAll").bind("click", function () {
		("#listItem").remove();
	});
});*/


/*var element = document.getElementById("delate");
element.remove();*/

