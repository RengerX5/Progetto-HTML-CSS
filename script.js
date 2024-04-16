/* MENU */

function myFunction() {
    const toggle_btn = document.getElementById('mob');
    toggle_btn.classList.toggle('active');
}

function closeHamburgerMenu() {
    const toggle_btn = document.getElementById('mob');
    toggle_btn.classList.remove('active');
}

/* INVIO EMAIL */
function sendEmail(){
    let params = {
        nome : document.getElementById("nome").value,
        cognome : document.getElementById("cognome").value,
        email : document.getElementById("email").value,
        messaggio : document.getElementById("messaggio").value
    }

    emailjs.send("service_tt5hea4","template_ri6wesq",params).then(function (res) {
        alert("Email inviata" + res.status);
    })
}