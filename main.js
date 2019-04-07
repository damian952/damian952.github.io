const phonePattern = '[0-9]{6,}';
const emailPattern = '[^\\s@]+@[^\\s@]+\\.[^\\s@]+';
const animationHideTimeout = 10000;

const button = document.querySelector("button");
const tooltips = document.querySelectorAll(".show-tooltip");
const formThanksfulMessage = document.getElementById("form-message");
const divOne = document.querySelector(".message-one");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const divTwo = document.querySelector(".message-two");
const name = document.getElementById("name");
const divThree = document.querySelector(".message-three");
const agrement = document.getElementById("agrement-terms-1");
const agrementTerms = document.getElementById("agrement-terms-2");
const divFour = document.querySelector(".message-four");
const divFive = document.querySelector(".message-five");
const errorMessages = document.getElementsByClassName("error-message");

const clearValidationErrors = () => {
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].classList.remove("error-message-show");
    }
};



phone.addEventListener('keydown', (evt) =>   {
    let regExp = new RegExp('[a-zA-Z]');
    if (evt.key !== 'Backspace' && regExp.test(evt.key)) {
        evt.preventDefault();
    }
});

const checkTheBox = (evt) => {
    evt.preventDefault();
    clearValidationErrors();
    let isValid = true;


    if (!name.checkValidity()) {
        divOne.classList.add("error-message-show");
        isValid = false;
    }

    let emailRegExpr = new RegExp(emailPattern);

    if (!emailRegExpr.test(email.value)) {
        divTwo.classList.add("error-message-show");
        isValid = false;
    }

    let regExp = new RegExp(phonePattern);
    if (!regExp.test(phone.value)) {
        divThree.classList.add("error-message-show");
        isValid = false;
    }


    if (!agrement.checkValidity()) {
        divFour.classList.add("error-message-show");
        isValid = false;
    }
    if (!agrementTerms.checkValidity()) {

        divFive.classList.add("error-message-show");
        isValid = false;
    }

    if (isValid) {
        formThanksfulMessage.classList.add("show-thanksful-message");

    }
};


button.addEventListener("click", checkTheBox);


const showTooltip = (evt) => {
    let tooltipID = evt.target.getAttribute("data-tooltip-id");

    let tooltip = document.getElementById("tooltip-" + tooltipID);

    tooltip.classList.add("active-tooltip");

};


Object.entries(tooltips).map((object) => {
    object[1].addEventListener("mouseenter", showTooltip);
});


const removeTooltip = (evt) => {
    let tooltipID = evt.target.getAttribute("data-tooltip-id");

    let tooltip = document.getElementById("tooltip-" + tooltipID);

    tooltip.classList.remove("active-tooltip");

};


Object.entries(tooltips).map((object) => {
    object[1].addEventListener("mouseout", removeTooltip);
});



const hideAnnimation = () => {
    formThanksfulMessage.classList.remove("show-thanksful-message");
};

setInterval(hideAnnimation, animationHideTimeout);