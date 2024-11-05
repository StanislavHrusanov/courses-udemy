import { useContext, useState } from "react";
import {
  Form,
  Link,
  useNavigate,
  json,
  redirect,
  useActionData,
} from "react-router-dom";
import styles from "./Auth.module.css";

function Register() {

  return (
    <section id="register-page">
      <div className={styles["container"]}>
        <div>
          <h2 className={styles["heading"]}>Register</h2>
        </div>
        <Form method="POST" className={styles["auth-form"]}>
          <div className={styles["input"]}>
            <label htmlFor="full-name" className={styles["fullname"]}>
              Full name
            </label>
            <input
              type="text"
              className={styles["input-field"]}
              name="fullname"
              id="full-name"
              placeholder="John Doe"
            />
          </div>
          {/* {errors.fullname &&
                            <div className={styles["error-msg"]}>
                                Full name must be at least two words starts with capital letter and separate with empty space or "-"!
                            </div>
                        } */}
          <div className={styles["input"]}>
            <label htmlFor="username" className={styles["username"]}>
              Username
            </label>
            <input
              type="text"
              className={styles["input-field"]}
              name="username"
              id="username"
              placeholder="jdoe"
            />
          </div>
          {/* {errors.username &&
                            <div className={styles["error-msg"]}>
                                Username must be at least 3 symbols different than empty space!
                            </div>
                        } */}
          <div className={styles["input"]}>
            <label htmlFor="password" className={styles["password"]}>
              Password
            </label>
            <input
              type="password"
              className={styles["input-field"]}
              name="password"
              id="password"
              placeholder="******"
            />
          </div>
          {/* {errors.password &&
                            <div className={styles["error-msg"]}>
                                Password must be at least 6 symbols different than empty space!
                            </div>
                        } */}
          <div className={styles["input"]}>
            <label htmlFor="rePass" className={styles["re-password"]}>
              Repeat password
            </label>
            <input
              type="password"
              className={styles["input-field"]}
              name="rePass"
              id="rePass"
              placeholder="******"
            />
          </div>
          {/* {errors.rePass &&
                            <div className={styles["error-msg"]}>
                                Passwords don't match!
                            </div>
                        } */}

          <div className={styles["action"]}>
            <button className={styles["action-button"]}>Register</button>
          </div>
        </Form>

        <div className={styles["auth-question"]}>
          <p>
            Already have an account?
            <Link to="/login"> Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;

export async function action({ request }) {
  const data = await request.formData();

  const enteredData = {
    fullname: data.get("fullname"),
    username: data.get("username"),
    password: data.get("password"),
    rePass: data.get("rePass"),
  };

  const response = await fetch("http://localhost:3030/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enteredData),
  });

  if (!response.ok) {
    throw json({ message: "Error" });
  }
  const resData = await response.json();
  localStorage.setItem("user", JSON.stringify(resData));

  return redirect("/");
}
