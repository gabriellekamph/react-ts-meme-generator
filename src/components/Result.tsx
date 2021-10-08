import * as React from 'react';

// Interface for Result component 

interface ResultInterface {
    resultContainerRef: React.RefObject<any>;
}

const Result = (props: ResultInterface) => {
    return (
        <div ref={props.resultContainerRef} className="result">
        </div>
    )
}

export default Result;