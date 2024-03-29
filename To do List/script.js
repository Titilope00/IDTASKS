document.addEventListener("DOMContentLoaded", function() {
    var addTaskBtn = document.getElementById("addTaskBtn");
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    // Add task
    addTaskBtn.addEventListener("click", function() {
      var taskText = taskInput.value.trim();
      if (taskText === '') {
        alert("Please enter a task!");
        return;
      }
  
      var li = document.createElement("li");
      li.innerHTML = '<span class="task-text">' + taskText + '</span><button class="delete-btn">Delete</button>';
      taskList.appendChild(li);
  
      taskInput.value = '';
  
      // Delete task
      var deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.addEventListener("click", function() {
        li.remove();
      });
    });
  });
  