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
  $('#taskForm input').val('');
});

$('#taskList').on('change', 'input[type="checkbox"]', function(){
  $(this).parent().toggleClass('completed');
});

$('#taskList').on('click', '.edit', function(){
  let content = $(this).prev().html();
  $(this).parent().html(`<form class="editor">
                              <input type="text" value="${content}">
                              <button type="submit" class="btn">Save</button>
                           </form>
    `);
});

$('#taskList').on('submit', '.editor', function(e){
  e.preventDefault();
  let content = $(this).find('input[type="text"]').val();
  $(this).parent().html(`
                            <input type="checkbox">
                            <span class="item">${content}</span>
                            <a href="#" class="edit">Edit</a>
                            <a href="#" class="remove">Remove</a>
                        `);
});

$('#taskList').on('click', '.remove', function(){
  $(this).parent().remove();
});

$('#deleteTasks').on('click', function(){
  $('#taskList').empty();
});

$('#clearCompleted').on('click', function(){
  $('.completed').remove();
});
