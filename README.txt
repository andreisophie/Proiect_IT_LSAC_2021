# Copyright Andrei Maruntis 2021

# Readme proiect IT LSAC 2021

Proba de Frontend

1. Cum se ruleaza aplicatia?
    Aplicatia nu ar trebui sa aiba nevoie de niciun setup preliminar in afara de descarcarea fisierelor pe calculatorul personal. Pentru a porni proiectul este suficient sa rulati pagina "Homepage.html", care se va deschide in browser-ul prestabilit (recomand un browser chromium-based precum Google Chrome sau Brave).
    Este posibil sa schimbi token-ul de boboc din fiecare fisier .js (linia 1).'

2. Ce ati implementat?
    Un site (numit Bazaroo) cu interfata grafica interactiva. Pagina de home are mai multe butoane care permit inscrierea, inregistrarea, respectiv trimiterea unui formular de contact (toate functiile de aici sunt complete si rafinate). Tot aici este un carusel care ia din baza de date review-urile utilizatorilor.
    In functie de tipul de user (elev sau profesor), dupa logare user-ul va fi redirectionat catre dashboard-ul rolului pe care il are, de unde se poate duce catre o pagina cu meditatii (pentru profesori si studenti) sau cu inscrieri (doar pentru elevi).
    De mentionat ca daca un user incearca sa intre in dashboard fara a fi logat sau cu tipul de utilizator gresit (dashboard-ul pentru prof logat ca elev), va foi redirectat catre home sau catre dashboard-ul corect. Aceasta functie poate fi implementata usor tuturor paginilor (in afara de home).
    Pagina de meditatii permite inregistrarea unei meditatii noi (pr prof) respectiv inscrierea la meditati existente (pt studenti). Toate elementele de pe aceste pagini (materiile, meditatiile) sunt luate de pe server. !!!Mentionez ca la momentul incarcarii butoanele de inscrierele sunt buguite si utilizatorul este inscris automat la toate cursurile existente la rualrea paginii.
    Pagina de inscrieri (doar pentru studenti) permite stergerea unei inscrieri a unui student, !!!insa butoanele sunt buguite asemanator mai sus.

3. Ce challenge-uri ati intampinat si cum le-ati rezolvat.
    Nu mai lucrasem cu html/css/bootstrap de foarte mult timp si prima seara a fost pur si simplu de reamintire, apoi i-am cerut mentorului (Mihai Parvulet) o mica intalnire (cu toata echipa) pentru a-mi face ordine in ganduri si a lucra mai eficient restul proiectului.
    La pagina de home au aparut mai multe probleme:
    - butoanele din navbar apar pe pozitia gresita pe mobil, respectiv in stanga paginii (nu am reusit sa rezolv)
    - in bootstrap nu exista suport pentru carousel cu mai multe elemente simultan; a fost nevoie sa caut un plugin si sa-l adaptez nevoilor mele (am incercat 2 plugin-uri diferite pana am gasit ceva potrivit)
    - umbra elementului de la jumatatea paginii nu am putut s-o fac exact (proprietatea css box-shadow nu accepta gradient pentru culoare); am improvizat folosind mai multe umbre pentru un efect similar
    A trebuti sa cer clarificari mentorului pentru integrarea cu API-ul; ne-am intalnit toata echipa sa ne explice fetch-urile si apoi am integrat cu succes restul paginilor. De mentionat ca nu stiam deloc JS inainte de acest proiect si a trebuit sa il invat de la 0 cu ajutorul trainingului LSAC, respectiv cu platforma Sololearn (curs online de JS cu exemple si exercitii).
    A fost de asemenea o noutate sa lucrez cu Bootstrap 5 si anumite elemente (ex Modals), dar documentatia de pe internet a fost foarte buna.
    Odata ce am terminat pagina de home, celelalte pagini au fost foarte usor de facut (aveam deja aproape tot ce aveam nevoie de la home). 
