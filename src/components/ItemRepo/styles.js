import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  .ver-repositorio {
    color: #0073e6;
    text-decoration: none;
    font-weight: bold;
  }

  .ver-repositorio:hover {
    color: #005bb5;
    text-decoration: underline;
  }

  .ver-repositorio, .remover {
    transition: color 0.3s ease, text-decoration 0.3s ease;
  }

  .remover {
    background: none;
    border: none;
    color: #ff0000;
    cursor: pointer;
    text-decoration: underline;
    font-size: 14px;
    display: block; 
    margin-top: 10px; 
  }

  hr {
    color: #fafafa60;
    margin-top: 20px 0;
  }
`;
