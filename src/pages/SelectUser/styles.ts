import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;
export const Preto = styled.div`
  background-color: black;
  width: 600px;
  height: 635px;
  div {
  }
  h1 {
    max-width: 300px;

    color: white;
  }
  h2 {
    max-width: 350px;

    color: #525252;
  }
  img {
    justify-content: center;

    width: 60px;
    margin-left: 270px;
    margin-top: -900px;
  }
  a {
    color: white;
  }
`;
export const Branco = styled.div`
  background-color: white;
  max-width: 600px;

  h1 {
    color: black;
  }
  h2 {
    color: #525252;
  }
`;
