import { Form, json, Link, redirect, useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

function Login(){

    return (
            <section id="login-page">
                <div className={styles["container"]}>
                    <div>
                        <h2 className={styles["heading"]}>
                            Login
                        </h2>
                    </div>
                    <Form method="POST" className={styles["auth-form"]}>
                        <div className={styles["input"]}>
                            <label htmlFor="username" className={styles["username"]}>Username</label>
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
                                Username is required!
                            </div>
                        } */}
                        <div className={styles["input"]}>
                            <label htmlFor="password" className={styles["password"]}>Password</label>
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
                                Password is required!
                            </div>
                        } */}
                        <div className={styles["action"]}>
                            <button className={styles["action-button"]}>Login</button>
                        </div>
                    </Form>
                    <div className={styles["auth-question"]}>
                        <p>Dont have an account?
                            <Link to="/register"> Sign up</Link>
                        </p>
                    </div>
                </div>
            </section>
        );
}
export default Login;

export async function action({ request }) {
    const data = await request.formData();
  
    const enteredData = {
      username: data.get("username"),
      password: data.get("password"),
    };
  
    const response = await fetch("http://localhost:3030/users/login", {
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