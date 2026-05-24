import { login, refreshProfileHeader } from "./account.js";
import { refreshCartCounter } from "../src/js/cart.js";
import { refreshFavoritesCounter } from "../src/js/favorite.js";

refreshCartCounter();
refreshFavoritesCounter();

function refreshLoginPage() {
  refreshProfileHeader("../");
  const loginForm = document.getElementById("login-form");

  if (!loginForm) {
    return;
  }

  async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await login(email, password);
    if ("error" in result) {
      const errorMessage = document.getElementById("message");
      errorMessage.textContent = result.error;
      errorMessage.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }

  loginForm.onsubmit = onLogin;
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshLoginPage();
  }
};
