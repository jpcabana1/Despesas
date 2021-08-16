import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router-dom";

import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const url = "http://localhost:3081/usuarios/0";

export default function Login() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Usuário</Form.Label>
          <Form.Control type="text" placeholder="Informe o usuário" />
          <Form.Text className="text-muted">
            Não compartilhe seus dados com ninguém.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" />
        </Form.Group>

        <LoginButton />
      </Form>
    </div>
  );
}

function LoginButton() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState();
  let history = useHistory();

  const requestUser = async () => {
    const rawResponse = await fetch(url);
    const content = await rawResponse.json();
    console.log(content);
    if (user !== {}) {
      history.push("/dashboard");
    }
  };

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Falha no login</Alert.Heading>
        <p>Usuário ou senha inválidos.</p>
      </Alert>
    );
  }
  return <Button onClick={() => requestUser()}>Login</Button>;
}
