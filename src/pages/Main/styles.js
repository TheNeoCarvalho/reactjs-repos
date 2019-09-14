import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  padding: 20px;
  margin: 10px auto;
  border-radius: 5px;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #000;
    margin: 5px 10px;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? "#f00" : "#ddd")};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 18px;
  }
`;

const animate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  background: #0d2636;
  display: flex;
  border: 0;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 5px;
  padding: 5px 15px;

  svg {
    margin-left: 10px;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #ddd;
    }

    a {
      color: #0d2636;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: "button"
})`
  background: transparent;
  color: #0d2636;
  border: 0;
  padding: 8px 7px;
  outline: 0;
  border-radius: 4px;
`;
