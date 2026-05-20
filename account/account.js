const BASE_URL = "https://v2.api.noroff.dev";
const ENDPOINT_REGISTER = `${BASE_URL}/auth/register`;
const ENDPOINT_LOGIN = `${BASE_URL}/auth/login`;
const API_KEY = "c42eaf1b-7d14-4320-a17e-31a726f97fd2";

export async function register(username, email, password) {
  console.log("hel");
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
    console.log(response);
  } catch (error) {
    console.log(error);
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
