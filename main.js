let incompleteList = document.querySelector('#incompleteItems');
let completedList = document.querySelector('#completedItems');
let incompleteItems = [];
let completedItems = [];

function create(event) {
  event.preventDefault();
  let newItem = document.querySelector('#newItem').value.trim();
  if (newItem !== '') {
    incompleteItems.push(newItem);
    render();
  }
  document.querySelector('#newItem').value = '';
}

function complete(index) {
  completedItems.push(incompleteItems[index]);
  incompleteItems.splice(index, 1);
  render();
}

function remove(index, list) {
  if (list === 'incomplete') {
    incompleteItems.splice(index, 1);
  } else if (list === 'completed') {
    completedItems.splice(index, 1);
  }
  render();
}

function render() {
  incompleteList.innerText = '';
  completedList.innerText = '';

  for (let i = 0; i < incompleteItems.length; i++) {
    let item = incompleteItems[i];
    let li = document.createElement('li');
    li.innerText = item;
    let completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', function() {
      complete(i);
    });
    li.appendChild(completeButton);
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', function() {
      remove(i, 'incomplete');
    });
    li.appendChild(removeButton);
    incompleteList.appendChild(li);
  }

  for (let i = 0; i < completedItems.length; i++) {
    let item = completedItems[i];
    let li = document.createElement('li');
    li.innerText = item;
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', function() {
      remove(i, 'completed');
    });
    li.appendChild(removeButton);
    completedList.appendChild(li);
  }
}

document.querySelector('form').addEventListener('submit', create);
render();
