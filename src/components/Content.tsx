import * as React from 'react';

// Interface for Content component 

interface ContentInterface {
    activeImage: string;
    contentContainerRef: any;
    textBottom: string;
    textTop: string; 
}

const Content = (props: ContentInterface) => {
    return (
        <div className="content" ref={props.contentContainerRef}>
            { /* Preview image */ }
            <img src={props.activeImage} alt="Meme" />

            { /* Top text */ }
            <h1>{props.textTop}</h1>

            { /* Bottom text */ }
            <h2>{props.textBottom}</h2>
        </div>
    )
}

export default Content;