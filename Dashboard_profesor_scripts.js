if (localStorage.role == "student")
    window.location.href = "Dashboard_profesor.html";
else
    if (localStorage.role != "teacher") {
        alert("Trebuie sa fii logat!");
        localStorage.clear();
        window.location.href = "Homepage.html";
    }


