/*
To Do List
Intermediate jQuery Exercise

Functions
  1. Add new task to list
      -On Submit:
        - Adds to count of todos
        - Appends to bottom
  2. Check off list items
      -Changes how it looks (add completed tasks)
  3. Edit list items
      -Click on edit creates an input field
      -Save button to change content
  3.5. Remove list item
  4. Global List buttons
      -Deletes all tasks and makes count 0
      -Clear completed deletes all with completed class

Pseudocode
1. Check off list items
  a. Add an event listener to the checkbox (when input[type='checkbox'] has checked attribute?)
  b. Add class completed to the li
2.
*/


$("#taskForm").on("submit", function(e){
  e.preventDefault();
  let newItem = $('#taskForm input').val();
  $('#taskList').append(`<li>
                            <input type="checkbox">
                            <span class="item">${newItem}</span>
                            <a href="#" class="edit">Edit</a>
                            <a href="#" class="remove">Remove</a>
                        </li>`);
});

$('input[type="checkbox"]').change(function(){
  $(this).parent().toggleClass('completed');
});
