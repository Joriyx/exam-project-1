const BASE_URL = "https://v2.api.noroff.dev";
const ENDPOINT_REGISTER = `${BASE_URL}/auth/register`;
const ENDPOINT_LOGIN = `${BASE_URL}/auth/login`;
const API_KEY = "c42eaf1b-7d14-4320-a17e-31a726f97fd2";

export async function register(username, email, password) {
  try {
    const response = await fetch(ENDPOINT_REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
    });
    if (response.status === 201) {
      window.location.replace("/account/login.html");
      return;
    }
    return {
      error: "Unknown error occurred",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Unknown error occurred",
    };
  }
}

export async function login(email, password) {
  try {
    const response = await fetch(ENDPOINT_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.status === 200) {
      const userData = (await response.json()).data;
      sessionStorage.setItem("logged-in-user", JSON.stringify(userData));
      window.location.replace("/index.html");
    }
    return {
      error: "Unknown error occurred",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Unknown error occurred",
    };
  }
}

export function logout() {
  sessionStorage.removeItem("logged-in-user");
  sessionStorage.removeItem("cart");
  window.location.reload();
}

export function getUser() {
  const user = sessionStorage.getItem("logged-in-user");
  if (!user) {
    return null;
  }

  return JSON.parse(user);
}

export function getUsername() {
  const user = getUser();
  if (!user) {
    return null;
  }
  return user.name;
}

export function isLoggedIn() {
  const user = getUser();
  if (!user) {
    return false;
  }
  return true;
}

export function refreshProfileHeader() {
  const user = getUser();
  const dropdown = document.getElementById("dropdown");
  const userName = document.getElementById("user-name");
  if (!user) {
    if (userName) {
      userName.textContent = "";
    }
    if (dropdown) {
      dropdown.replaceWith(createLoggedOutDropdown());
    }
    return;
  }
  if (userName) {
    userName.textContent = "Hi, " + user.name;
  }
  if (dropdown) {
    dropdown.replaceWith(createLoggedInDropdown(user));
  }
}

function createLoggedInDropdown(user) {
  const dropdown = document.createElement("nav");
  dropdown.className = "dropdown";
  dropdown.id = "dropdown";

  const list = document.createElement("ul");
  dropdown.appendChild(list);

  const profile = document.createElement("li");
  list.appendChild(profile);
  const profileLink = document.createElement("a");
  profileLink.className = "underline-animation";
  profileLink.href = "/coming-soon/index.html";
  profileLink.textContent = "Profile";
  profile.appendChild(profileLink);

  const logoutItem = document.createElement("li");
  list.appendChild(logoutItem);
  const logoutButton = document.createElement("button");
  logoutButton.className = "underline-animation";
  logoutButton.textContent = "Logout";
  logoutButton.onclick = logout;
  logoutItem.appendChild(logoutButton);

  return dropdown;
}

function createLoggedOutDropdown() {
  const dropdown = document.createElement("nav");
  dropdown.className = "dropdown";
  dropdown.id = "dropdown";

  const list = document.createElement("ul");
  dropdown.appendChild(list);

  const login = document.createElement("li");
  list.appendChild(login);
  const loginLink = document.createElement("a");
  loginLink.className = "underline-animation";
  loginLink.href = "/account/login.html";
  loginLink.textContent = "Log in";
  login.appendChild(loginLink);

  const register = document.createElement("li");
  list.appendChild(register);
  const registerLink = document.createElement("a");
  registerLink.className = "underline-animation";
  registerLink.textContent = "Register";
  registerLink.href = "/account/register.html";
  register.appendChild(registerLink);

  return dropdown;
}
