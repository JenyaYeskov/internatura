let url = "http://localhost:3000/students/";

function getStudents() {
    return fetch(url);
}

function show(students) {
    let list = document.getElementById("students");
    list.innerHTML = "";

    for (let st of students) {
        let stud = document.createElement("p");
        let t = document.createTextNode(st.name + " " + st.knowledge);
        stud.appendChild(t);
        list.appendChild(stud);
    }
}

function addStudent() {
    let input = document.getElementById("inputId").value;

    if (input !== "") {
        try {
            input = input.split(",");
            let name = input[0];
            let knowledge = parseInt(input[1]);

            let body = JSON.stringify({
                "name": name,
                "knowledge": knowledge
            });

            return fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: body
            });
        } catch (e) {
            console.error(e)
        }
    }
}

function init() {
    addStudent();

    getStudents().then(res => res.json()).then(show);
}

window.onload = init;
