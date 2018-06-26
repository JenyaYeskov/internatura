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
        input = input.split(",");
        let name = input[0];
        let knowledge = input[1];

        let body = JSON.stringify({
            "name": name,
            "knowledge": knowledge
        });

        return fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: body
        });
    }
}

function init() {
    addStudent();

    getStudents().then(res => res.json()).then(show);
}

window.onload = init;
