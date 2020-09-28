import React, { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import { Container, Form, Button, OptionContainer } from './styles';

const SignInOut: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [login, setLogin] = useState(true);

  return (
    <Container>
      <OptionContainer>
        {!login ? (
          <button type="button" onClick={() => setLogin(true)}>
            Entrar
          </button>
        ) : (
          <button type="button" onClick={() => setLogin(false)}>
            Cadastre-se
          </button>
        )}
      </OptionContainer>
      <Form onSubmit={() => { }} ref={formRef}>
        <h2>{login ? 'Efetue login para acessar.' : 'Cadastre-se agora.'}</h2>
        {login ? (
          <>
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
          </>
        ) : (
          <>
            <Input name="Nome" icon={FiMail} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
          </>
        )}
        <Button type="button">Entrar</Button>
      </Form>
    </Container>
  );
};

export default SignInOut;
