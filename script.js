let names = [];

function addName() {
    let nameInput = document.getElementById("nameInput");
    let name = nameInput.value.trim();

    if (name !== "") {
        names.push({name: name, draws: 0});
        renderTable();
        nameInput.value = "";
    }
}

function renderTable() {
    const tableBody = document.querySelector("#nameTable tbody");
    tableBody.innerHTML = "";

    names.forEach((entry, index) => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = entry.name;
        cell2.textContent = entry.draws;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteName(index));
        cell3.appendChild(deleteButton);
    });
}

function deleteName(index) {
    names.splice(index, 1);
    renderTable();
}

function drawWinner() {
    let tableRows = document.querySelectorAll("#nameTable tbody tr");
    tableRows.forEach(row => row.classList.remove("winner"));

    if (names.length > 0) {
        let randomIndex = Math.floor(Math.random() * names.length);
        names[randomIndex].draws++;
        tableRows[randomIndex].classList.add("winner");
        renderTable();
    }
}
