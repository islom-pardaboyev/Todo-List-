const inputEl = document.querySelector("#newtask input");
const pushBtn = document.querySelector("#push");
const tasksContainer = document.querySelector("#tasks");

// Function to attach event listeners to new tasks and delete buttons
function attachTaskListeners() {
  const deleteButtons = document.querySelectorAll(".delete");
  const tasks = document.querySelectorAll(".task");

  // Add event listener for delete buttons
  deleteButtons.forEach((deleteButton) => {
    deleteButton.onclick = function () {
      this.parentElement.remove();
    };
  });

  // Add event listener for marking tasks as completed
  tasks.forEach((task) => {
    task.onclick = function () {
      this.classList.toggle("completed");
    };
  });
}

// Event handler for push button click
pushBtn.addEventListener("click", function () {
  if (inputEl.value.trim().length === 0) {
    alert("Please Enter A Task");
  } else {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    newTask.innerHTML = `
      <span id="taskname">${inputEl.value.trim()}</span>
      <button class="delete"><i class="fa-solid fa-trash"></i></button>
    `;

    tasksContainer.appendChild(newTask);
    inputEl.value = "";

    // Re-attach event listeners to new tasks
    attachTaskListeners();
  }
});

// Initial call to attach event listeners to existing tasks
attachTaskListeners();
