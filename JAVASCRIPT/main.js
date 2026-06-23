document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const btn = document.getElementById("submitBtn");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");

  function validate() {
    let valid = true;


    if (name.value.trim() === "") {
      name.classList.add("invalid");
      name.classList.remove("valid");
      nameError.textContent = "Name is required";
      valid = false;
    } else {
      name.classList.add("valid");
      name.classList.remove("invalid");
      nameError.textContent = "";
    }


    if (!email.value.includes("@")) {
      email.classList.add("invalid");
      email.classList.remove("valid");
      emailError.textContent = "Valid email required";
      valid = false;
    } else {
      email.classList.add("valid");
      email.classList.remove("invalid");
      emailError.textContent = "";
    }


    if (message.value.trim().length < 10) {
      message.classList.add("invalid");
      message.classList.remove("valid");
      messageError.textContent = "Min 10 characters required";
      valid = false;
    } else {
      message.classList.add("valid");
      message.classList.remove("invalid");
      messageError.textContent = "";
    }

    btn.disabled = !valid;
    return valid;
  }

  name.addEventListener("input", validate);
  email.addEventListener("input", validate);
  message.addEventListener("input", validate);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validate()) {
      successMsg.textContent = "Message sent successfully!";

      name.value = "";
      email.value = "";
      message.value = "";

      name.classList.remove("valid");
      email.classList.remove("valid");
      message.classList.remove("valid");

      btn.disabled = true;
    }
  });
});