import React from 'react';
import GlobalStyle from "./styles/global";
import ArticleComponent from "./components/article_component/ArticleComponent"
import {dummyData} from "./resources/dummy_data"


function App() {
  return (
    <>
      <GlobalStyle />
      <ArticleComponent articleData={dummyData} />
    </>
  );
}

export default App;
