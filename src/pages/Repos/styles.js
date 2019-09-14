import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  padding: 30px;
  margin: 40px auto;
  border-radius: 5px;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 20%;
    margin: 20px 0;
  }

  h1 {
    font-size: 30px;
    color: #0d2636;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #0d2636;
    line-height: 1.4;
    max-width: 400px;
    text-align: center;
  }
`;

export const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100vh;
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #ddd;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
  }

  & + li {
    margin-top: 5px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  div {
    flex: 1;
    margin-left: 10px;

    p {
      margin-top: 10px;
      font-size: 14px;
      color: #222;
    }
  }

  strong {
    font-size: 16px;

    a {
      text-decoration: none;
      color: #333;
      transition: 0.1s;

      &:hover {
        color: #0071db;
      }
    }
    span {
      background: #333;
      color: #fff;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      padding: 4px 6px;
      margin: 0 3px;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: #333;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 5px 15px;
    outline: 0;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const FilterList = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 5px 15px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    margin: 0 2px;

    &:nth-child(${props => props.active + 1}) {
      background: #0071db;
      color: #fff;
    }
  }
`;
