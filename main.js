let url = "http://localhost:3000/students/";

async function show(students) {
    // let templ = document.getElementById("studentTemplate");
    // let element = templ.content.querySelector(".student");
    let list = document.getElementById("students");
    list.innerHTML = "";

    console.log(students);

    for (let st of students) {
        // let clone = element.cloneNode(true);
        let stud = document.createElement("p");
        let t = document.createTextNode(st.name);
        stud.appendChild(t);
        list.appendChild(stud);

        document.body.appendChild(stud);
    }
}

function getStudents() {
    return fetch(url);
}

function addStudent() {
    var formData = new FormData();
    formData.append("username", "454");


    let bod = JSON.stringify({
        "name": "zhora",
        // "knowledge": 5
    });

    console.log(JSON.parse(bod));

    return fetch(url, {
        method: "POST",
        // dataType:"json",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: bod
    });
}

function init() {

    addStudent()
        .then(res => {
        return res.json()
    }).then(r => {
        console.log(r)
    }).catch(err => {
        console.log(err)
    }); //.then(getStudents().then(res => res.json()).then(show))

    getStudents().then(res => res.json()).then(show);
}

window.onload = init;

// window.onload = () => show(students);