const state = {
    tasks: []
};

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const status = document.getElementById("status");

function addTask(text) {
    state.tasks.push({
        id: Date.now(),
        text: text,
        done: false
    });
    render();
}

function toggleTask(id) {
    const task = state.tasks.find(function (item) {
        return item.id === id;
    });
    if (task) {
        task.done = !task.done;
        render();
    }
}

function removeTask(id) {
    state.tasks = state.tasks.filter(function (item) {
        return item.id !== id;
    });
    render();
}

function render() {
    list.innerHTML = "";

    const remaining = state.tasks.filter(function (item) {
        return !item.done;
    }).length;

    const done = state.tasks.length - remaining;

    if (state.tasks.length === 0) {
        status.textContent = "No tasks yet. Add one to get started.";
        const empty = document.createElement("li");
        empty.className = "empty";
        empty.textContent = "Your board is empty.";
        list.appendChild(empty);
        return;
    }

    status.textContent = remaining + " remaining  •  " + done + " done  •  " + state.tasks.length + " total";

    state.tasks.forEach(function (task) {
        const item = document.createElement("li");
        item.className = "task" + (task.done ? " done" : "");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", function () {
            toggleTask(task.id);
        });

        const label = document.createElement("span");
        label.textContent = task.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Remove";
        deleteBtn.addEventListener("click", function () {
            removeTask(task.id);
        });

        item.appendChild(checkbox);
        item.appendChild(label);
        item.appendChild(deleteBtn);
        list.appendChild(item);
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
        addTask(text);
        input.value = "";
        input.focus();
    }
});

render();
