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
const btnConfirm = document.querySelector(".btn-confirm");
const paraError = document.querySelectorAll(".error-msg");

const formatName = function (str) {
  return str
    .toLowerCase()
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const checkNumber = function () {};
// const show

btnConfirm.addEventListener("click", function () {
  inputFields.forEach((inp) => {
    if (!inp.value) {
      document.querySelector(`.error-msg-${inp.id}`).classList.remove("hidden");
    } else if (inp.type === "text") {
      const input = formatName(inp.value);
      inp.value = input;
    } else if ((inp.type = "tel")) {
      if (isNaN(inp.value)) {
        document.querySelector(`.error-msg-${inp.id}`).classList.remove("hidden");

        console.log(inp.value);
        // console.log("has numbers");
      } else {
        // console.log("no numbers");
      }
      //   isNaN(inp.value) ? "has numbers" : "no numbers";
    }
    console.log(inp);
  });
});
