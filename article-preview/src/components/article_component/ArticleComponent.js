import React from 'react'
import {ArticleContainer} from "./articleComponentStyle"

export default function ArticleComponent(props) {
    
    return (
        <>
            <ArticleContainer>
                <img src={props.articleData.articleImg} alt="Article Custom"/>
                <p>Component</p>
            </ArticleContainer>
            
        </>
    )
}
