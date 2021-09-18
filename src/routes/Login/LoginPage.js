import React from "react";
import LoginForm from "./LoginForm";
import { Container, Logo, GoToPage } from "../../styles/components";
import logo from "../../assets/logo.svg";
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
