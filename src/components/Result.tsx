import * as React from 'react';

// Interface for Result component 

interface ResultInterface {
    resultContainerRef: React.RefObject<any>;
    closeModal: () => void;
}

const Result = (props: ResultInterface) => {
    
    return (
        <div id="myModal" className="modal">
              <div className="modal-content" ref={props.resultContainerRef}>
                <span className="close" onClick={props.closeModal}> &times; </span>
                <p>Voila! Right click and click "Save Image as" to save your amazing meme. 
                <span id="close" onClick={props.closeModal}> &times; </span></p>
        </div>
        </div>
    )
}

export default Result;