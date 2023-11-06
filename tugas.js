const arrayList = document.getElementById("arrayList");
const pushButton = document.getElementById("pushButton");
const popButton = document.getElementById("popButton");
const unshiftButton = document.getElementById("unshiftButton");
const shiftButton = document.getElementById("shiftButton");

const items = ["apple", "banana", "cherry"];

function updateList() {
    arrayList.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        arrayList.appendChild(li);
    });
}

updateList();

pushButton.addEventListener("click", () => {
    const newItem = prompt("Enter an item to push:");
    if (newItem) {
        items.push(newItem);
        updateList();
    }
});

popButton.addEventListener("click", () => {
    if (items.length > 0) {
        const removedItem = items.pop();
        alert(`Popped: ${removedItem}`);
        updateList();
    } else {
        alert("Array is empty. Cannot pop.");
    }
});

unshiftButton.addEventListener("click", () => {
    const newItem = prompt("Enter an item to unshift:");
    if (newItem) {
        items.unshift(newItem);
        updateList();
    }
});

shiftButton.addEventListener("click", () => {
    if (items.length > 0) {
        const removedItem = items.shift();
        alert(`Shifted: ${removedItem}`);
        updateList();
    } else {
        alert("Array is empty. Cannot shift.");
    }
});
