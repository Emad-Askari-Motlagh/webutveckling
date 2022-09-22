"use strict";
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
// Show input error message
function showError(input, message) {
    if (!input || !message) {
        return;
    }
    const formControl = input.parentElement;
    if (formControl) {
        formControl.className = "form-control error";
        const small = formControl.querySelector("small");
        if (small) {
            small.innerText = message;
        }
    }
}
// Show success outline
function showSuccess(input) {
    if (input) {
        const formControl = input.parentElement;
        if (formControl)
            formControl.className = "form-control success";
    }
}
// Check email is valid
function checkEmail(input) {
    if (input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
            showSuccess(input);
        }
        else {
            showError(input, "Email is not valid");
        }
    }
}
// Check required fields
function checkRequired(inputArr) {
    if (inputArr)
        inputArr.forEach((input) => {
            if (input.value.trim() === "") {
                showError(input, `${getFieldName(input)} is required`);
            }
            else {
                showSuccess(input);
            }
        });
}
// Check input length
function checkLength(input, min, max) {
    if (input)
        if (input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        }
        else if (input.value.length > max) {
            showError(input, `${getFieldName(input)} must be less than ${max} characters`);
        }
        else {
            showSuccess(input);
        }
}
// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}
// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event listeners
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (username && email && password && password2)
            checkRequired([username, email, password, password2]);
        if (username)
            checkLength(username, 3, 15);
        if (password)
            checkLength(password, 6, 25);
        if (email)
            checkEmail(email);
        if (password && password2)
            checkPasswordsMatch(password, password2);
    });
}
