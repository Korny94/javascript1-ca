const fullNameForm = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subjectForm = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const emailForm = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const addressForm = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const formSubmit = document.querySelector("#formSubmit");
const formReset = document.querySelector("#formReset");
const formError = document.querySelector(".formError");
const form = document.querySelector("form");
const contactUs = document.querySelector("#contactUs");

formSubmit.onclick = function() {
    event.preventDefault();

    if (checkLength(fullNameForm.value, 0) && checkLength(subjectForm.value, 9) && validateEmail(emailForm.value) && checkLength(addressForm.value, 9)) {
        contactUs.innerHTML = "Your request is sent!";
    }

    if (checkLength(fullNameForm.value, 0)) {
        fullNameError.style.color = "green";
        fullNameError.innerHTML = "Approved!";
        fullNameError.style.opacity = "1";
    } else {
        fullNameError.style.opacity = "1";
    }

    if (checkLength(subjectForm.value, 9)) {
        subjectError.style.color = "green";
        subjectError.innerHTML = "Approved!";
        subjectError.style.opacity = "1";
    } else {
        subjectError.style.opacity = "1";
    }

    if (validateEmail(emailForm.value)) {
        emailError.style.color = "green";
        emailError.innerHTML = "Approved!";
        emailError.style.opacity = "1";
    } else {
        emailError.style.opacity = "1";
    }

    if (checkLength(addressForm.value, 9)) {
        addressError.style.color = "green";
        addressError.innerHTML = "Approved!";
        addressError.style.opacity = "1";
    } else {
        addressError.style.opacity = "1";
    }
}

function disableReset() {
    if (checkLength(fullNameForm.value, 0) || checkLength(subjectForm.value, 0) || checkLength(emailForm.value, 0) || checkLength(addressForm.value, 0)) {
        formReset.disabled = false;
    } else {
        formReset.disabled = true;
    }
}

fullNameForm.addEventListener("keyup", disableReset);
subjectForm.addEventListener("keyup", disableReset);
emailForm.addEventListener("keyup", disableReset);
addressForm.addEventListener("keyup", disableReset);


function checkLength(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

