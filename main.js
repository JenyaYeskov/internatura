let url = "http://localhost:3000/students/";

async function show(students) {
    let list = document.getElementById("students");
    list.innerHTML = "";

    for (let st of students) {
        let stud = document.createElement("p");
        let t = document.createTextNode(st.name);
        stud.appendChild(t);
        list.appendChild(stud);
    }
}

function getStudents() {
    return fetch(url);
}

function addStudent() {
    let input = document.getElementById("inputId").value;

    if (input !== "") {
        let bod = JSON.stringify({
            "name": name,
            "knowledge": 5
        });

        return fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: bod
        });
    }
}

function init() {
    addStudent();

    getStudents().then(res => res.json()).then(show);
}

window.onload = init;
