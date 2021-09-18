import React from "react";
import SignUpForm from "./SignUpForm";
import { Container, Logo, GoToPage } from "../../../styles/public";
import logo from "../../../assets/logo.svg";
import { useHistory } from "react-router";

export default function SignUp() {
  const hst = useHistory();

  return (
    <Container>
      <Logo src={logo} alt="Logo track it" />
      <SignUpForm />
      <GoToPage onClick={() => hst.push("/")}>
        Já tem uma conta? Faça login!
      </GoToPage>
    </Container>
  );
}
