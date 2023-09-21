const button = document.getElementById('addTask'); // button

const inputBox = document.getElementById('taskInput'); // inputBox

const toDoBox = document.getElementsByClassName('container'); //toDoBox

let emptyVal = '';

if (button && inputBox) {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const taskText = inputBox.value;
    if (taskText === '') {
      alert('give some task!');
    } else {
      addtask(taskText);
      inputBox.value = ''; // after the process clear the value
    }
  });
}

// creating new task in list items

function addtask(taskTest) {
  const listItem = document.createElement('li');
  listItem.textContent = taskTest;

  console.log(listItem);

  // delete button

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });

  //

  listItem.appendChild(deleteButton);
  document.getElementById('taskList').appendChild(listItem);
}
