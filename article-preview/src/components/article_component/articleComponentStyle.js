import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  height: 220px;
  width: 600px;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 25px 0px rgba(109, 127, 151, 0.4);
  -moz-box-shadow: 0px 10px 25px 0px rgba(109, 127, 151, 0.4);
  box-shadow: 0px 10px 25px 0px rgba(109, 127, 151, 0.4);

  img {
    width: 40%;
    overflow: hidden;
    border-radius: 10px 0 0 10px;
  }

  @media (max-width: 375px) {
    background-color: red;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
