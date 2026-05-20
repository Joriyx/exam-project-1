function refreshLoginPage() {
  const loginForm = document.getElementById("login-form");

  if (!loginForm) {
    return;
  }

  async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");
  }

  loginForm.onsubmit = onLogin;
}

document.onreadystatechange = refreshLoginPage;
