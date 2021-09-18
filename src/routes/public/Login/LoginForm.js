import React, { useContext, useState } from "react";
import { Input, Sender } from "../../../styles/public";
import { UserContext } from "../../../context/Context";
import { postLogin } from "../../../services/api";
import { useHistory } from "react-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const hst = useHistory();

  function login(e) {
    e.preventDefault();
    postLogin(email, password).then((res) => {
      setUser(res.data);
      hst.push("/habitos");
    });
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
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="senha"
        required
      />

      <Sender type="submit">Entrar</Sender>
    </form>
  );
}
