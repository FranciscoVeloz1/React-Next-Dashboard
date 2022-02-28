import { session } from "./api";
import { getSession } from "next-auth/react";

export const getCurrent = async (payload) => {
  try {
    const response = await fetch(session.current, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    console.log(response)
    return await response.json();
  } catch (error) {
    return { status: "error", error };
  }
};
