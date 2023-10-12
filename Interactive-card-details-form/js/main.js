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

// number format function wegen leerspace

"use strict";

const inputFields = document.querySelectorAll("input");
const labelErrNums = document.querySelector(".error-msg-number");
const btnConfirm = document.querySelector(".btn-confirm");

const labelCardNumber = document.querySelector(".card-number-display");
const labelCardName = document.querySelector(".card-name-display");

const labelCardAll = document;

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

// const showFormaErorr = function (field, msg) {
//   document.querySelector(`.error-msg-${field}`).textContent = msg;
// };

btnConfirm.addEventListener("click", function () {
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
    }
    // When input is text number (tel) type
    else if (inp.id === "number") {
      // Cheks if its actually a number
      if (isNaN(inp.value)) showErrors(inp.id, "Wrong format, numbers only");
      else if (inp.value.length < 16) showErrors(inp.id, "Please enter all numbers");
      // If its a number display in card
      else {
        displayCardInputs(inp);
      }
    } else if (inp.id === "date") {
      if (isNaN(inp.value)) showErrors(inp.id, "Wrong format, numbers only");
      else if (inp.value.length < 2) showErrors(inp.id, "Please enter all numbers");
      else displayCardInputs(inp);
    } else if (inp.id === "cvc") {
      if (isNaN(inp.value)) showErrors(inp.id, "Wrong format, numbers only");
      else if (inp.value.length < 3) showErrors(inp.id, "Please enter all numbers");
      else displayCardInputs(inp);
    }
  });
});

// BACKUP1

// btnConfirm.addEventListener("click", function () {
//   inputFields.forEach((inp) => {
//     hideErrors(inp.id);
//     // When input is empty
//     if (!inp.value) {
//       showErrors(inp.id);
//     }
//     // When input is text type
//     else if (inp.type === "text") {
//       const input = formatName(inp.value);
//       inp.value = input;
//       displayCardInputs(inp);
//     }
//     // When input is text number (tel) type
//     else if ((inp.type = "tel")) {
//       // Cheks if its actually a number
//       if (isNaN(inp.value)) {
//         showErrors(inp.id);
//         showFormaErorr(inp.id);
//       }
//       // If its a number display in card
//       else {
//         console.log(inp);
//         displayCardInputs(inp);
//       }
//     }
//   });
// });

// BACKUP 2

// const hideErrors = function (field) {
//   document.querySelector(`.error-msg-${field}`).classList.add("hidden");
// };

// const showErrors = function (field) {
//   document.querySelector(`.error-msg-${field}`).classList.remove("hidden");
// };

// const showFormaErorr = function (field, msg) {
//   document.querySelector(`.error-msg-${field}`).textContent = msg;
// };

// const displayCardInputs = function (field) {
//   document.querySelector(`.card-${field.name}-display`).textContent = field.value;
// };

// btnConfirm.addEventListener("click", function () {
//   inputFields.forEach((inp) => {
//     hideErrors(inp.id);
//     // When input is empty
//     if (!inp.value) {
//       showErrors(inp.id);
//     }
//     // When input is text type
//     else if (inp.type === "text") {
//       const input = formatName(inp.value);
//       inp.value = input;
//       displayCardInputs(inp);
//     }
//     // When input is text number (tel) type
//     else if (inp.id === "number") {
//       // Cheks if its actually a number
//       if (isNaN(inp.value)) {
//         showErrors(inp.id);
//         showFormaErorr(inp.id, "Wrong format, numbers only");
//       } else if (inp.value.length < 16) {
//         showErrors(inp.id);
//         showFormaErorr(inp.id, "Please enter all numbers");
//       }
//       // If its a number display in card
//       else {
//         displayCardInputs(inp);
//       }
//     } else if (inp.id === "date") {
//       if (isNaN(inp.value)) {
//         showErrors(inp.id);
//         showFormaErorr(inp.id, "Wrong format, numbers only");
//       } else if (inp.value.length < 2) {
//         showErrors(inp.id);
//         showFormaErorr(inp.id, "Please enter all numbers");
//       } else {
//         displayCardInputs(inp);
//       }
//     } else if (inp.id === "cvc") {
//       if (isNaN(inp.value)) {
//         showErrors(inp.id);
//         showFormaErorr(inp.id, "Wrong format, numbers only");
//       } else if (inp.value.length < 3) {
//         showErrors(inp.id);
//         showFormaErorr(inp.id, "Please enter all numbers");
//       } else {
//         displayCardInputs(inp);
//       }
//     }
//   });
// });
