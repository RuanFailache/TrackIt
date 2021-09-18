import React, { useState } from "react";
import { Input, Sender } from "../../../styles/public";
import { postSignUp } from "../../../services/api";
import { useHistory } from "react-router";

export default function SignUForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const hst = useHistory();

  function login(e) {
    e.preventDefault();
    postSignUp(email, password, name, image)
      .then(() => hst.push("/"))
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
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="senha"
        required
      />

      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="nome"
        required
      />

      <Input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="foto"
        required
      />

      <Sender type="submit">Cadastrar</Sender>
    </form>
  );
}
