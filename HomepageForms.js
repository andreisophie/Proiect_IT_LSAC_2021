const secretToken="ebaa7b2f-515d-48b7-9172-81080ceaeedd";

function createPopup(type, message)     //type=0 pentru eroare, type=1 pentru succes
{
    const divAlerta = document.getElementById("alerta");
    divAlerta.classList.add(type?"alert-success":"alert-danger");
    divAlerta.innerHTML = message;
    divAlerta.hidden = false;
    setTimeout(() => {  
        divAlerta.hidden = true;
        divAlerta.innerHTML = null;
        divAlerta.classList.remove(type?"alert-success":"alert-danger");
    }, 5000);
}

function makeOptionActive(rol)
{   
    document.getElementById("optionStudent").selected = "false";
    document.getElementById("optionProfesor").selected = "false";

    document.getElementById(`option${rol}`).selected = "true";
}

function confirmContact(responseData)
{
    if (responseData.statusCode == 400 || responseData.statusCode == 401)
        createPopup(0, `<strong>Error:</strong> ${responseData.message}`);
    else
        createPopup(1, `Mesajul a fost trimis cu succes`);
}

function submitContact()
{
    const data = { 
        name : document.getElementById("numeContact").value,
        email : document.getElementById("emailContact").value,
        message : document.getElementById("mesajContact").value
    };
    const token = localStorage.getItem("token");
    const url = "https://proba2021.lsacbucuresti.ro/contact-requests";
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'boboc-token': secretToken
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(responseData => confirmContact(responseData));
}

function confirmLogin (responseData)
{
    if (responseData.statusCode == 400 || responseData.statusCode == 401)
        createPopup(0, `<strong>Error:</strong> ${responseData.message}`);
    else {
        createPopup(1, 'Conectarea s-a efectuat cu succes!');
        localStorage.role = responseData.role.title;
        localStorage.token = responseData.token;
        if (localStorage.role == "student")
            window.location.href = "Dashboard_student.html";
        else
            window.location.href = "Dashboard_profesor.html";
    }
}

function submitLogin() 
{
    const data = { 
        email : document.getElementById("emailLogin").value,
        password : document.getElementById("parolaLogin").value
    };
    const token = localStorage.getItem("token");
    const url = "https://proba2021.lsacbucuresti.ro/auth/login";
    fetch(url, {
    method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'boboc-token': secretToken
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(responseData => confirmLogin(responseData));
}

function confirmRegister (responseData)
{
    if (responseData.statusCode == 400 || responseData.statusCode == 401)
        createPopup(0, `<strong>Error:</strong> ${responseData.message}`);
    else {
        createPopup(1, 'Înregistrarea s-a efectuat cu succes');
        window.location.href = "Homepage.html";
    }
}

function submitRegister() 
{
    const data = { 
        firstname : document.getElementById("numeRegister").value,
        lastname : document.getElementById("prenumeRegister").value,
        email : document.getElementById("emailRegister").value,
        password : document.getElementById("parolaRegister").value,
        confirmation_password : document.getElementById("confirmParolaRegister").value,
        role : document.getElementById("rolRegister").selectedIndex ? "teacher" : "student"
    };
    const token = localStorage.getItem("token");
    const url = "https://proba2021.lsacbucuresti.ro/auth/register";
    fetch(url, {
    method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'boboc-token': secretToken
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(responseData => confirmRegister(responseData));
}