import { register, refreshProfileHeader } from "./account.js";
import { refreshCartCounter } from "../src/js/cart.js";
import { refreshFavoritesCounter } from "../src/js/favorite.js";

refreshCartCounter();
refreshFavoritesCounter();

function refreshRegisterPage() {
  refreshProfileHeader("../");
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
    const result = await register(username, email, password);
    if ("error" in result) {
      const errorMessage = document.getElementById("message");
      errorMessage.textContent = result.error;
      errorMessage.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }

  registerForm.onsubmit = onRegister;
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshRegisterPage();
  }
};
