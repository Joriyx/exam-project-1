function refreshLoginPage() {
  const loginForm = document.getElementById("login-form");

  if (!loginForm) {
    return;
  }

  async function onLogin(event) {
    event.preventDefault();
  }

  loginForm.onsubmit = onLogin;
}

document.onreadystatechange = refreshLoginPage;
