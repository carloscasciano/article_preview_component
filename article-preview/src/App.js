import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import ArticleComponent from "./components/article_component/ArticleComponent";
import { dummyData } from "./resources/dummy_data";

function App() {
  const [shareVisibility, setShareVisibility] = useState(true);

  const handleShareVisibility = () => {
    shareVisibility === true
      ? setShareVisibility(false)
      : setShareVisibility(true);
  };

  return (
    <>
      <GlobalStyle />
      <ArticleComponent
        articleData={dummyData}
        shareVisibility={shareVisibility}
        handleShareVisibility={handleShareVisibility}
      />
    </>
  );
}

export default App;
