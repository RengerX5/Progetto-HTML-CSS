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
    let txt = document.getElementById("mailInviata");
    let params = {
        nome : document.getElementById("nome").value,
        cognome : document.getElementById("cognome").value,
        email : document.getElementById("email").value,
        messaggio : document.getElementById("messaggio").value
    };

    emailjs.init({
        publicKey: "fGbPeGrMw2fLwQsRe",
    });

    const serviceID = "service_tt5hea4";
    const templateID = "template_ri6wesq";

    emailjs.send(serviceID, templateID, params)
    .then((res) => {
    })
    .catch((err) => console.log(err));
}


/* CONTROLLO NOME */
function checkUsername() {                    
    var nome = el.value;                        
    if (nome.length == "") {                   
      elMsg.textContent = 'Inserisci un nome valido';
    } else {                                        
      elMsg.textContent = '';                       
    }
}
  
var el = document.getElementById('nome');     
var elMsg = document.getElementById('feedback'); 
  
el.addEventListener('blur', checkUsername, false);



/* CONTROLLO COGNOME */
function checkSurname() {                        
    var cognome = surname.value;                        
    if (cognome.length == "") {                    
      msg.textContent = 'Inserisci un cognome valido';
    } else {                                        
      msg.textContent = '';                       
    }
}
  
var surname = document.getElementById('cognome');     
var msg = document.getElementById('feedback1');  

surname.addEventListener('blur', checkSurname, false);



/* CONTROLLO EMAIL */
function checkEmail() {                       
    var email = emailCheck.value;                        
    if (email.length == "") {                      
      mess.textContent = 'Inserisci una mail valida';
    } else {                                        
      mess.textContent = '';                     
    }
}
  
var emailCheck = document.getElementById('email');     
var mess = document.getElementById('feedback2');  
  
emailCheck.addEventListener('blur', checkEmail, false);