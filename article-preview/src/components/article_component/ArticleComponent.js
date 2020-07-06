import React from "react";
import {
  ArticleContainer,
  TextContainer,
  AvatarShareContainer,
} from "./articleComponentStyle";

export default function ArticleComponent(props) {
  return (
    <>
      <ArticleContainer>
        <img src={props.articleData.articleImg} alt="Article Custom" />
        <TextContainer>
          <h2>{props.articleData.title}</h2>
          <p>{props.articleData.text}</p>
          <AvatarShareContainer>
            <img src={props.articleData.authorImg} alt="Article Custom" />
            <div>
              <h2>{props.articleData.author}</h2>
              <p>{props.articleData.date}</p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </AvatarShareContainer>
        </TextContainer>
      </ArticleContainer>
    </>
  );
}
