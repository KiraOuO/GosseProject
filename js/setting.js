// Get edit buttons and modal element
const editButtons = document.querySelectorAll(".edit-button");
const modal = document.getElementById("edit-modal");

// Get form elements inside the modal
const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const passwordInput = document.getElementById("password-input");
const saveButton = document.getElementById("save-button");

// Add event listeners to edit buttons to open the modal
editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("show");
  });
});

// Add event listener to save button to update info and close modal
saveButton.addEventListener("click", () => {
  const usernameValue = usernameInput.value;
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const passwordValue = passwordInput.value;

  // Update info in info-container
  const username = document.querySelector(
    ".info-label:first-of-type + .info-value"
  );
  username.textContent = usernameValue;
  const email = document.querySelector(
    ".info-label:nth-of-type(2) + .info-value"
  );
  email.textContent = emailValue;
  const phone = document.querySelector(
    ".info-label:nth-of-type(3) + .info-value"
  );
  phone.textContent = phoneValue;
  const password = document.querySelector(
    ".info-label:last-of-type + .info-value"
  );
  password.textContent = "*".repeat(passwordValue.length);

  // Close modal
  modal.classList.remove("show");
});

// Add event listener to close button to close modal without saving changes
const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => {
  modal.classList.remove("show");
});
