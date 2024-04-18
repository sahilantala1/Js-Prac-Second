let input = document.getElementById("task");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let items = document.createElement("li");
  items.innerText = input.value;
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("del");
  items.appendChild(delBtn);
  ul.appendChild(items);
  input.value = "";
  ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("del")) {
      event.target.parentElement.remove();
    }
  });
});
