import { login, refreshProfileHeader } from "./account.js";

function refreshLoginPage() {
  refreshProfileHeader();
  const loginForm = document.getElementById("login-form");

  if (!loginForm) {
    return;
  }

  async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password);
  }

  loginForm.onsubmit = onLogin;
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    refreshLoginPage();
  }
};
