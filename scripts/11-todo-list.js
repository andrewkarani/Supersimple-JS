/* algorithm
1. create an array to store todos
2. wen we click "Add",
3. Get text from textbox
4. Add it to array 
5.console.log() the array
*/

const todoList = [];
// create a function to call wen sb presses the add button
function addTodo() {
// to get the text frm the input box we will use document.queryselector() 
// to use the document.query selector we will 1st assign a class to the input 
const inputElement = document.querySelector('.js-name-input');
// we will ge the input using a property of the input elemnt called value and putting it in a variable
const name = inputElement.value;
// we need to add this name we have gotten to our todoList
todoList.push(name);
console.log(todoList);

// we need to reset the text box to empty once someone has entered their data
// remember the value property rep the text in the textbox
inputElement.value = '';
}
