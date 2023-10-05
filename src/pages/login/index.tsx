import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";
import { AuthProvider } from "@/firebase";

import { Link } from "react-router-dom";
import getUser from "./getUser";
import { logo } from "@/assets";
import { MobileMenu } from "@/components";
import { AnimatePresence } from "framer-motion";
type Props = {};

const Login = (props: Props) => {
  const { user, setUser } = React.useContext(AuthProvider);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState<FirebaseError["code"]>("");

  const submitHandler = (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        getUser(userCredential.user.uid).then((user) => {
          if (user) {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
          }
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            setError("Неверный пароль");
            break;
          case "auth/user-not-found":
            setError("Неверный логин");
            break;
          case "auth/invalid-login-credentials":
            setError("Неверный логин");
            break;
          default:
            setError(error.code);
        }
      });
  };

  return (
    <main className="flex basis-auto grow">
      <section className="w-full section">
        <div className="container flex flex-col h-full">
          <ul className="flex items-center justify-between py-8 gap-7">
            <li className="max-w-[50%]">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </li>
            <li>
              <Link className="Button--fullfilled" to="/blog">
                назад
              </Link>
            </li>
          </ul>
          <div className="grid py-12 place-content-center grow">
            {!user ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitHandler(formData, setError);
                }}
              >
                <h2 className="Heading">Авторизация</h2>
                <div className="flex flex-col gap-8 my-12">
                  <input
                    className="Input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => {
                      setError("");
                      setFormData({ ...formData, email: e.target.value });
                    }}
                  />
                  <input
                    className="Input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={(e) => {
                      setError("");
                      setFormData({ ...formData, password: e.target.value });
                    }}
                  />
                </div>

                <button className="mx-auto Button--fullfilled" type="submit">
                  Авторизоваться
                </button>
                {error && (
                  <p className="mt-4 text-center text-red-500">{error}</p>
                )}
              </form>
            ) : (
              <div>
                <p className="text-xl text-center">
                  Вы авторизованы как <strong>{user.email}</strong>
                </p>
                <div className="flex justify-center gap-4 mt-8">
                  <Link className="Button--fullfilled" to="/blog">
                    Перейти в блог
                  </Link>
                  <button
                    className="text-xl font-bold text-accent-2 hover:underline"
                    onClick={() => {
                      signOut(auth);
                      setUser(null);
                      localStorage.removeItem("user");
                    }}
                  >
                    Выйти
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
