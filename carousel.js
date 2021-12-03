const url = "https://proba2021.lsacbucuresti.ro/reviews";
const responseData = fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'boboc-token': secretToken  //este declarat in alt fisier js
    },
}).then(response => response.json()).then(responseData => {
    let template = document.getElementById("templateCarousel");
    let father = document.getElementById("carousel-parent");

    for (let i = 0; i < responseData.length; i++) {
        let clone = template.cloneNode(true);
        clone.removeAttribute('id');
        if (i == 0) {
            clone.classList.add("active");
        }

        clone.querySelector("#nume").innerHTML = responseData[i].user.firstname;
        clone.querySelector("#mesaj").innerHTML = responseData[i].message;

        father.appendChild(clone);
    }
    // Aici incepe script-ul care stilizeaza carousel-ul
    $('#myCarousel').carousel({
        interval: 5000
    })
    
    $('.carousel .carousel-item').each(function() {
        var minPerSlide = 2;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    
        for (var i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
    
            next.children(':first-child').clone().appendTo($(this));
        }
    });
});


