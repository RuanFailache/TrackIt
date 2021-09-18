import React, { useContext, useState } from "react";
import { Input, Sender } from "../../../styles/public";
import { UserContext } from "../../../context/Context";
import { postLogin } from "../../../services/api";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function login(e) {
    e.preventDefault();
    postLogin(email, password)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err.response));
  }

  return (
    <form onSubmit={login}>
      <Input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      />

      <Input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="senha"
        required
      />

      <Sender type="submit">Entrar</Sender>
    </form>
  );
}
