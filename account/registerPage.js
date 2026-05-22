import { register, refreshProfileHeader } from "./account.js";
import { refreshCartCounter } from "../src/js/cart.js";

refreshCartCounter();

function refreshRegisterPage() {
  refreshProfileHeader();
  const registerForm = document.getElementById("register-form");

  if (!registerForm) {
    return;
  }

  async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const verifyPassword = formData.get("verify-password");
    if (verifyPassword !== password) {
      const errorMessage = document.getElementById("message");
      errorMessage.textContent = "Passwords do not match";
      errorMessage.scrollIntoView({ behavior: "smooth" });
      return;
    }
    register(username, email, password);
  }

  registerForm.onsubmit = onRegister;
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshRegisterPage();
  }
};
