"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface InitialStateProps {
  name: string;
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  name: "",
  email: "",
  password: "",
};

const RegisterPage: React.FC = (props) => {
  const [state, setState] = useState<InitialStateProps>(initialState);

  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios
      .post("/api/register", state)
      .then(() => {
        router.reload();
      })
      .then(() => {
        setTimeout(() => {
          router.push("/login");
        }, 2500);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={onSubmit} className="text-center" action="">
      <div className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2">
        <input
          placeholder="Name"
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={state.name}
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
        <input
          placeholder="Password"
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={state.password}
        />
        <button type="submit">Enviar</button>
      </div>
      <div>
        <div>
          Do you have an account ? <Link href="/login">Sign in</Link>{" "}
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
