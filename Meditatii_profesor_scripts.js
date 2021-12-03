const secretToken="ebaa7b2f-515d-48b7-9172-81080ceaeedd";
const token = localStorage.getItem("token");
var idIndexes = [];

const url1 = "https://proba2021.lsacbucuresti.ro/subjects";
const response1 = fetch(url1, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'boboc-token': secretToken
    },
}).then(response1 => response1.json()).then(responseData1 => {
    let template = document.getElementById("optionTemplate");
    let father = document.getElementById("selectFather");

    for (let i = 0; i < responseData1.length; i++) {
        let clone = template.cloneNode(true);
        clone.removeAttribute('id');
        clone.setAttribute('id', responseData1[i].id)
        idIndexes[i] = responseData1[i].id;
        clone.innerHTML = responseData1[i].title;
        father.appendChild(clone);
    }
    template.parentNode.removeChild(template);
})

function submitMaterie()
{
    const data = { 
        description : document.getElementById("descriptionMaterie").value,
        subject_id : idIndexes[document.getElementById("selectFather").selectedIndex]
    };
    const url2 = "https://proba2021.lsacbucuresti.ro/tutoring-classes";
    const response2 = fetch(url2, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'boboc-token': secretToken
        },
        body: JSON.stringify(data)
    }).then(response2 => response2.json()).then(responseData2 => console.log(responseData2))
}

const url2 = "https://proba2021.lsacbucuresti.ro/my/tutoring-classes";
const response2 = fetch(url2, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'boboc-token': secretToken
    },
}).then(response2 => response2.json()).then(responseData2 => {
    console.log(responseData2);
    const template = document.getElementById("templateMeditatii");
    const father = document.getElementById("fatherMeditatii"); 
    const footer = document.getElementById("footer");
    for (let i = 0; i < responseData2.length; i++) {
        let clone = template.cloneNode(true);
        clone.querySelector("#titluMeditatie").innerHTML = responseData2[i].subject.title;
        clone.querySelector("#descriereMeditatie").innerHTML = responseData2[i].description;
        clone.querySelector("#profMeditatie").innerHTML = `${responseData2[i].teacher.firstname} ${responseData2[i].teacher.lastname}`;
        father.insertBefore(clone, footer);
        //if (i < 4)
            clone.removeAttribute("hidden");
    }
})