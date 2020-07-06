import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  height: 280px;
  width: 733px;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 25px 0px rgba(109, 127, 151, 0.4);
  -moz-box-shadow: 0px 10px 25px 0px rgba(109, 127, 151, 0.4);
  box-shadow: 0px 10px 25px 0px rgba(109, 127, 151, 0.4);

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px 0 0 10px;
    object-fit: cover;
    overflow: hidden;
  }

  @media (max-width: 375px) {
    background-color: red;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: hsl(217, 19%, 35%);
  padding: 0 6% 0 6%;

  h2 {
    font-weight: 700;
    font-size: 18px;

    margin-top: 40px;
  }

  p {
    font-weight: 500;
    font-size: 13px;

    margin-top: 15px;
  }
`;

export const AvatarShareContainer = styled.div`
  height: 34%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;

  img {
    margin: 0;
    padding: 0;
    height: 42px;
    width: 42px;
    border-radius: 21px;
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
    align-self: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: center;
    margin: -10px;
    grid-area: 1 / 2 / 2 / 5;

    h2 {
      margin: 0;
      padding: 0;
      font-size: 13px;
      font-weight: 700;
    }

    p {
      margin: 0;
      padding: 0;
      font-size: 13px;
      font-weight: 500;
      color: hsl(212, 23%, 69%);
    }
  }

  .svgHolder {
    height: 32px;
    width: 32px;
    border-radius: 16px;
    background-color: hsl(210, 46%, 95%);
    grid-area: 1 / 5 / 2 / 6;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
