`use strict`;
/* 
Project Idea #1: ToDo app
Criteria: 
1. HTML Input
2. Submit or OK button
3. New Entry appears in a list 
Bonus: Add a 'delete' button on each item which , when clicked, removes the item from the list 
Bonus 2: Only delete the task after getting confirmation that the user intended to. 
*/

//Element selections
const addBtn = document.querySelector('.addBtn');
// const toDoList = [];
// const deleteBtns = document.querySelectorAll('.finished');

const getInput = function (inp) {
  const li = document.createElement('li');
  li.textContent = inp;
  // toDoList.push(li);
  document.getElementById('list').appendChild(li);
  document.getElementById('input').value = '';
  const deleteBtn = document.createElement('button');
  li.appendChild(deleteBtn);
  deleteBtn.textContent = 'Finished!';
  deleteBtn.classList.add('finished');

  deleteBtn.addEventListener('click', function () {
    const confirmation = prompt(
      `Type 'Y' if you want to delete this item. Otherwise, type 'N'`
    );
    if (confirmation === 'Y' || confirmation === 'y') {
      document.getElementById('list').removeChild(li);
      alert('Great job!');
    } else if (confirmation === 'N' || confirmation === 'n') null;
    else
      alert(
        `If you wish to delete an item from your list, click the finished button and follow the instructions.`
      );
  });
};

addBtn.addEventListener('click', function () {
  const input = document.getElementById('input').value; //input must be declared here in the event listener, else the input text field's initial value (' ') will be taken when the button is clicked.
  input === '' ? alert('Please enter a To-do item') : getInput(input);
});
