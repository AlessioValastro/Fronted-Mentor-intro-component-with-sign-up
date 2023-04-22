const submitButton = document.querySelector(".container__form-submitButton");

submitButton.addEventListener("click", () => {
  /* reset */
  document.querySelector("#emptyFirstName").classList.add("hidden");
  document.querySelector("#emptyLastName").classList.add("hidden");
  document.querySelector("#invalidEmail").classList.add("hidden");
  document.querySelector("#invalidPass").classList.add("hidden");

  let firstName = document.querySelector("#first-name"),
    lastName = document.querySelector("#last-name"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password");

  firstName.classList.remove("errorBox");
  lastName.classList.remove("errorBox");
  email.classList.remove("errorBox");
  password.classList.remove("errorBox");

  let count = 0;
  if (firstName.value == "") {
    document.querySelector("#emptyFirstName").classList.remove("hidden");
    firstName.classList.add("errorBox");
    count++;
  }
  if (lastName.value == "") {
    document.querySelector("#emptyLastName").classList.remove("hidden");
    lastName.classList.add("errorBox");
    count++;
  }
  if (email.value == "" || email.length < 6) {
    document.querySelector("#invalidEmail").classList.remove("hidden");
    email.classList.add("errorBox");
    count++;
  }
  if (password.value == "" || password.length < 8) {
    document.querySelector("#invalidPass").classList.remove("hidden");
    password.classList.add("errorBox");
    count++;
  }
  if (count == 0) {
    document
      .querySelector(".container__form-claimed")
      .classList.remove("hidden");
  }
});
