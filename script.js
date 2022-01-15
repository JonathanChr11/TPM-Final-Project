$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }
    })
});

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('subject');
const message = document.getElementById('message');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
      

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    }else if (validateEmail(emailValue)) {
          setSuccessFor(email);
    } else {
            setErrorFor(email, 'Email is invalid');
        }

    if (subjectValue === '') {
        setErrorFor(subject, 'Subject cannot be blank');
    } else if (subjectValue.length < 1){
        setErrorFor(subject, 'Subject length minimum 1 character');
    }else {
        setSuccessFor(subject);
    }

    if (messageValue === '') {
        setErrorFor(message, 'Message cannot be blank');
    } else if (messageValue.length < 5) {
        setErrorFor(message, 'Minimum Message must be at least 5 words');
    } else {
        setSuccessFor(message);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}
