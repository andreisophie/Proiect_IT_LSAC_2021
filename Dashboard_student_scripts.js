if (localStorage.role == "teacher")
    window.location.href = "Dashboard_profesor.html";
else
    if (localStorage.role != "student") {
        alert("Trebuie sa fii logat!");
        localStorage.clear();
        window.location.href = "Homepage.html";
    }


