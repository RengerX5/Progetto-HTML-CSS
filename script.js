/* MENU */

function myFunction() {
    const toggle_btn = document.getElementById('mob');
    toggle_btn.classList.toggle('active');
}




/* FORM */

document.getElementById("myForm").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("nome");
    var surnameInput = document.getElementById("cognome");
    var emailInput = document.getElementById("email");

    var nameError = document.getElementById("name-error");
    var surnameError = document.getElementById("surname-error");
    var emailError = document.getElementById("email-error");

    // Controllo validità campo nome
    if (nameInput.value === "") {
        nameError.style.display = "block";
        nameInput.classList.add("error");
        event.preventDefault(); // Impedisce l'invio del form
    } else {
        nameError.style.display = "none";
        nameInput.classList.remove("error");
    }

    // Controllo validità campo cognome
    if (surnameInput.value === "") {
        surnameError.style.display = "block";
        surnameInput.classList.add("error");
        event.preventDefault(); // Impedisce l'invio del form
    } else {
        surnameError.style.display = "none";
        surnameInput.classList.remove("error");
    }

    // Controllo validità campo email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = "block";
        emailInput.classList.add("error");
        event.preventDefault(); // Impedisce l'invio del form
    } else {
        emailError.style.display = "none";
        emailInput.classList.remove("error");
    }
});

// Aggiungi un listener per controllare l'input quando l'utente modifica il campo email
emailInput.addEventListener("input", function() {
    var emailError = document.getElementById("email-error");
    if (emailPattern.test(emailInput.value)) {
        emailError.style.display = "none";
        emailInput.classList.remove("error");
    } else {
        emailError.style.display = "block";
        emailInput.classList.add("error");
    }
});

