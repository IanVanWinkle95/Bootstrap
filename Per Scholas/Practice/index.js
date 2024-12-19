// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("form");
//     const userName = document.getElementById("name");
//     const continents = document.querySelector("#continent-select");
//     const resultContainer = document.getElementById("result-container");

//     // Cache elements using getElementById and querySelector
//     const submitBtn = document.getElementById("submit-btn");
//     const formContainer = document.querySelector("#form-container");

//     // Create elements using createElement
//     const title = document.createElement("h2");
//     title.textContent = "Sign up for your destination today!";
//     formContainer.insertBefore(title, form);

//     // Use appendChild and prepend to add new elements to the DOM
//     const warningBox = document.createElement("div");
//     warningBox.id = "warning-box";
//     formContainer.insertBefore(warningBox, form);

//     // Event listeners
//     continents.addEventListener("change", (e) => {
//         console.log("Selected Continent:", e.target.value);
//     });

//     form.addEventListener("submit", validate);
//     submitBtn.addEventListener("click", displayResult);

//     // Function to validate form
//     function validate(evt) {
//         evt.preventDefault();
//         const nameVal = validateName();
//         if (nameVal === false) {
//             return false;
//         }
//         return true;
//     }

//     // Function to validate name
//     function validateName() {
//         if (userName.value === "") {
//             displayWarning("Please provide a name.");
//             userName.focus();
//             return false;
//         }
//         return userName.value;
//     }

//     // Function to display warning
//     function displayWarning(msg) {
//         warningBox.textContent = msg;
//         setTimeout(() => {
//             warningBox.textContent = "";
//         }, 2000);
//     }

//     // Function to display result
//     function displayResult() {
//         const selectedContinent = continents.value;
//         const name = userName.value;
//         const result = `Hello, ${name}! You have selected ${selectedContinent} as your destination.`;
//         resultContainer.textContent = result;
//     }

//     // Use parent-child-sibling relationship
//     console.log(form.parentNode);
//     console.log(form.firstChild);
//     console.log(form.lastChild);

//     // Iterate over a collection of elements
//     const inputs = form.querySelectorAll("input, select");
//     inputs.forEach((input) => {
//         console.log(input.id);
//     });
