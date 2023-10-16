// - Fill in the form and see the card details update in real-time
// - Receive error messages when the form is submitted if:
//   - Any input field is empty
//   - The card number, expiry date, or CVC fields are in the wrong format
// - View the optimal layout depending on their device's screen size
// - See hover, active, and focus states for interactive elements on the page

// - Update the details on the card as the user fills in the fields
// - Validate the form fields when the form is submitted
// - If there are no errors, display the completed state
// - Reset the form when the user clicks "Continue" on the completed state

"use strict";

const inputFields = document.querySelectorAll("input");
const btnConfirm = document.querySelector(".btn-confirm");
const form = document.querySelector(".form-card");

const thankYou = document.querySelector(".container-thankyou");
const btnContinue = document.querySelector(".btn-continue");

const labelCardNumber = document.querySelector(".card-number-display");
const labelCardName = document.querySelector(".card-name-display");

const labelCardAll = document;

let num;

const formatName = function (str) {
  return str
    .toLowerCase()
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const hideErrors = function (field) {
  document.querySelector(`.error-msg-${field}`).classList.add("hidden");
};

const showErrors = function (field, msg = "Can't be blank") {
  document.querySelector(`.error-msg-${field}`).classList.remove("hidden");
  document.querySelector(`.error-msg-${field}`).textContent = msg;
};

const displayCardInputs = function (field) {
  document.querySelector(`.card-${field.name}-display`).textContent = field.value;
};

const checkInput = function (inp, inpMax) {
  if (isNaN(inp.value)) showErrors(inp.id, "Wrong format, numbers only");
  else if (inp.value.length < inpMax) showErrors(inp.id, "Please enter all numbers");
  else {
    num++;
    displayCardInputs(inp);
  }
};

const displayThankyou = function () {
  form.classList.add("hidden");
  thankYou.classList.remove("hidden");
};

const resetForm = function () {
  form.classList.remove("hidden");
  thankYou.classList.add("hidden");

  inputFields.forEach((inp) => (inp.value = ""));
};

const checkValidation = function () {
  num = 0;

  inputFields.forEach((inp) => {
    hideErrors(inp.id);
    // When input is empty
    if (!inp.value) {
      showErrors(inp.id);
    }
    // When input is text type
    else if (inp.type === "text") {
      const input = formatName(inp.value);
      inp.value = input;
      displayCardInputs(inp);
      num++;
    } else if (inp.id === "number") {
      checkInput(inp, 16);
    } else if (inp.id === "date") {
      checkInput(inp, 2);
    } else if (inp.id === "cvc") {
      checkInput(inp, 3);
    }
  });
};

btnConfirm.addEventListener("click", function (e) {
  e.preventDefault();
  checkValidation();

  num === 5 ? displayThankyou() : "";
});

btnContinue.addEventListener("click", resetForm);
