const inputBox = document.getElementById("input-Box");

const listContainer = document.getElementById("list-container");

addTask = () => {
    if(inputBox.value === "") {
        alert("You must write something")
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
  
            listContainer.addEventListener("click", (e) => {
                if(e.target.localName === "li") {
                    e.target.classList.toggle("checked");
                    saveData();
                }else if(e.target.localName === "span") {
                    e.target.parentElement.remove();
                    saveData();
                }
            })



            saveData = () => {
                localStorage.setItem("data", listContainer.innerHTML);
            }

            displayTask = () => {
                listContainer.innerHTML=  localStorage.getItem("data");
            }
            displayTask();