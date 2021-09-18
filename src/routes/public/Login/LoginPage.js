import React from "react";
import LoginForm from "./LoginForm";
import { Container } from "../../../styles/global";
import { Logo, GoToPage } from "../../../styles/public";
import logo from "../../../assets/logo.svg";
import { useHistory } from "react-router";

export default function Login() {
  const hst = useHistory();

  return (
    <Container>
      <Logo src={logo} alt="Logo track it" />
      <LoginForm />
      <GoToPage onClick={() => hst.push("/cadastro")}>
        Não tem uma conta? Cadastre-se!
      </GoToPage>
    </Container>
  );
}
