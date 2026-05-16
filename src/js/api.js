const BASE_URL = "https://v2.api.noroff.dev";
const ENDPOINT = `${BASE_URL}/online-shop`;

export async function getProducts() {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      return (await response.json()).data;
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

export async function getProduct(id) {
  try {
    const response = await fetch(ENDPOINT + "/" + id);
    if (response.ok) {
      return (await response.json()).data;
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
