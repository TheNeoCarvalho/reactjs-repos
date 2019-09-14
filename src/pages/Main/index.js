import React from "react";
import styled from "styled-components";
import { FaGithub, FaPlus } from "react-icons/fa";
export default function Main() {
  return (
    <Container>
      <FaGithub size={25} color="#000" />
      <span>My Repositories</span>
      <Form onSubmit={() => {}}>
        <SubmitButton>
          <input type="text" />
          <FaPlus color="#fff" />
        </SubmitButton>
        s
      </Form>
    </Container>
  );
}

const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 10px;
  color: #000;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }

  svg {
    margin-right: 10px;
  }
`;

const Form = styled.form``;

const SubmitButton = styled.button``;
