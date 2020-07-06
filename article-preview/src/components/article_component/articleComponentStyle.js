import styled from "styled-components";

const mediaShift = "733px";

export const ArticleContainer = styled.div`
  display: flex;
  height: 280px;
  width: 733px;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 25px 0px rgba(109, 127, 151, 0.4);
  -moz-box-shadow: 0px 10px 25px 0px rgba(109, 127, 151, 0.4);
  box-shadow: 0px 10px 25px 0px rgba(109, 127, 151, 0.4);

  @media (max-width: ${mediaShift}) {
    background-color: white;
    height: 513px;
    width: 328px;
    flex-direction: column;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px 0 0 10px;
    object-fit: cover;
    overflow: hidden;

    @media (max-width: ${mediaShift}) {
      height: 200px;
      border-radius: 10px 10px 0 0;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: hsl(217, 19%, 35%);
  padding: 0 6% 0 6%;

  @media (max-width: ${mediaShift}) {
    align-content: flex-end;
    height: 313px;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    margin-top: 40px;
  }

  p {
    font-weight: 500;
    font-size: 13px;
    margin-top: 15px;
    line-height: 1.8;
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

  @media (max-width: ${mediaShift}) {
    margin-top: 20px;
  }

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
    grid-area: 1 / 5 / 2 / 6;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${mediaShift}) {
      z-index: 2;
    }
  }
`;

export const ShareAreaContainer = styled.div`
  position: absolute;
  opacity: ${(props) => (props.visible === true ? 1 : 0)};
  height: 55px;
  width: 247px;
  border-radius: 10px;
  background-color: hsl(217, 19%, 35%);
  z-index: 1;
  margin: 140px 0 0 528px;
  padding: 0 30px 0 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${mediaShift}) {
    height: 70px;
    width: 328px;
    border-radius: 0 0 10px 10px;
    margin: 443px 0 0 0px;
    display: flex;
    justify-content: flex-start;
  }

  p {
    color: hsl(212, 23%, 69%);
    letter-spacing: 6px;

    @media (max-width: ${mediaShift}) {
      letter-spacing: 6px;
      padding: 0 8px 0 8px;
    }
  }

  @media (min-width: ${mediaShift}) {
    :after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top-color: hsl(217, 19%, 35%);
      border-bottom: 0;
      margin-left: -10px;
      margin-bottom: -10px;
    }
  }
`;

export const SocialMediaIconContainer = styled.div`
  @media (max-width: ${mediaShift}) {
    padding: 0 8px 0 8px;
  }
`;
