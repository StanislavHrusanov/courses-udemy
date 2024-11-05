import { json, redirect } from "react-router-dom";
import { getUser } from "../util";

export async function action() {
  const user = getUser();

  const response = await fetch("http://localhost:3030/users/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
  });

  if (!response.ok) {
    throw json({ message: "Error!" });
  }

  localStorage.removeItem("user");

  return redirect("/");
}
