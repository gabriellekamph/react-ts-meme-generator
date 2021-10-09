import * as React from 'react';

// Interface for Form component

interface FormInterface {
    isMemeGenerated: boolean;
    textBottom: string;
    textTop: string;
    handleImageChange: () => void;
    handleImageInputChange: (event: React.ChangeEvent) => void;
    handleInputChange: (event: React.ChangeEvent) => void;
    handleMemeGeneration: () => void;
    handleMemeReset: () => void;
}

// Form component 

const Form = (props: FormInterface) => {
    return (
        <div className="form">
            <div className="form-inputs">
                { /* Input field for top text */ }
                <input
                    name="text-top"
                    type="text"
                    placeholder="Top text"
                    value={props.textTop}
                    onChange={props.handleInputChange}
                />

                { /* Input field for bottom text */ }
                <input
                    name="text-bottom"
                    type="text"
                    placeholder="Bottom text"
                    value={props.textBottom}
                    onChange={props.handleInputChange}
                />
            </div>

            <div className="form-buttons">
                { /* Button to load random image from API on click */ }
                <button className="btn btn-primary" type="button" onClick={props.handleImageChange}>
                    <p className="btn-text">Randomize new image</p> 
                </button>

                { /* Load image */ }
                <label className="btn btn-primary" htmlFor="fileInput">
                    <p className="btn-text">Upload your own image</p> 
                    <input 
                        id="fileInput" 
                        name="fileInput" 
                        type="file" 
                        accept=".jpg, .jpeg, .png" 
                        onChange={props.handleImageInputChange} 
                        hidden 
                    />                
                </label>

                { /* Button to generate png of the meme on click */}
                <button className="btn btn-primary" type="button" onClick={props.handleMemeGeneration}>
                <p className="btn-text">Generate meme</p> 
                </button>

                { /* Button to remove meme on click */}
                {props.isMemeGenerated && 
                <button className="btn btn-danger" type="button" onClick={props.handleMemeReset}>
                    Reset 
                </button>}
            </div>
        </div>
    )
}

export default Form;
