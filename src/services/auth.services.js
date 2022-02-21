import { auth } from "./api";

export const signIn = async (payload) => {
  try {
    const response = await fetch(auth.signin, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    return await response.json();
  } catch (error) {
    return { status: "error", error };
  }
};

export const signUp = async (payload) => {
  try {
    const response = await fetch(auth.signup, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    return await response.json();
  } catch (error) {
    return { status: "error", error };
  }
};
