"use strict";

// varebles
const input = document.querySelector(".form-control");
const todoList = document.querySelector("#todoList");
const addBtn = document.querySelector("#addButton");
const clearList = document.querySelector("#clearButton");

function complate() {}

function addLi() {
  if (input.value) {
    // for value
    const value = input.value;
    input.value = "";

    // element li
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.borderRadius = "9px";
    li.style.backgroundColor = "#b6b8b9";
    li.style.padding = "15px";
    li.style.marginTop = "20px";

    // element p
    const p = document.createElement("p");
    p.textContent = value;
    p.style.fontWeight = "600";
    p.style.fontSize = "20px";
    p.style.margin = 0;
    p.style.overflow = "hidden";

    // element div
    const div = document.createElement("div");
    div.classList.add("defult");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "10px";

    // defult btns
    // element btnEdit
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.classList.add("btn-primary");
    btnEdit.classList.add("btn");

    //   element btnComplate
    const btnComplate = document.createElement("button");
    btnComplate.textContent = "Complate";
    btnComplate.classList.add("btn-success");
    btnComplate.classList.add("btn");

    //   element btnDelete
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.classList.add("btn-danger");
    btnDelete.classList.add("btn");

    // btns > div
    div.append(btnEdit);
    div.append(btnComplate);
    div.append(btnDelete);

    // p,div > li
    li.append(p);
    li.append(div);

    // li > todoList
    todoList.prepend(li);

    // keyPress

    // btnEdit
    btnEdit.addEventListener("click", () => {
      if (p.style.display != "none") {
        // doneBtn
        var done = document.createElement("button");
        done.textContent = "Done";
        done.classList.add("btn-success");
        done.classList.add("btn");
        // cancelBtn
        var cancel = document.createElement("button");
        cancel.textContent = "Cancel";
        cancel.classList.add("btn");
        cancel.classList.add("btn-danger");
        // input
        var input = document.createElement("input");
        input.style.width = "40%";
        input.value = p.textContent;
        input.style.height = "20px";
        // editBtn
        var editBtn = document.createElement("div");
        editBtn.classList.add("defult");
        editBtn.style.display = "flex";
        editBtn.style.alignItems = "center";
        editBtn.style.gap = "10px";

        // done, cancel > editBtn
        editBtn.append(done);
        editBtn.append(cancel);

        // shartlart
        p.style.display = "none";
        div.style.display = "none";
        editBtn.style.display = "flex";
        input.style.display = "inline-block";

        // input, editBtn > li
        li.append(input);
        li.append(editBtn);

        // done click
        done.addEventListener("click", () => {
          p.textContent = input.value;
          input.value = "";
          p.style.display = "inline-block";
          div.style.display = "flex";
          editBtn.style.display = "none";
          input.style.display = "none";
        });

        // cancel click
        cancel.addEventListener("click", () => {
          input.value = "";
          p.style.display = "inline-block";
          div.style.display = "flex";
          editBtn.style.display = "none";
          input.style.display = "none";
        });
      }
    });

    // btnComplate
    btnComplate.addEventListener("click", () => {
      if (btnComplate.textContent == "Complate") {
        p.style.textDecoration = "line-through";
        p.style.opacity = 0.5;
        btnComplate.textContent = "UnComplate";
        btnComplate.classList.remove("btn-success");
        btnComplate.classList.add("btn-warning");
      } else {
        p.style.opacity = 1;
        p.style.textDecoration = "none";
        btnComplate.textContent = "Complate";
        btnComplate.classList.add("btn-success");
        btnComplate.classList.remove("btn-warning");
      }
    });

    // btnDelete
    btnDelete.addEventListener("click", () => {
      li.remove();
    });
  }
}

// add todo
addBtn.addEventListener("click", () => {
  addLi();
});
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addLi();
  }
});

// clear todo
clearList.addEventListener("click", () => {
  let i = document.querySelector("#todoList");
  i.innerHTML = "";
});
