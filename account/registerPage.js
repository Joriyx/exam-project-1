function refreshRegisterPage() {
  const registerForm = document.getElementById("register-form");

  if (!registerForm) {
    return;
  }

  async function onRegister(event) {
    event.preventDefault();
  }

  registerForm.onsubmit = onRegister;
}

document.onreadystatechange = refreshRegisterPage;
