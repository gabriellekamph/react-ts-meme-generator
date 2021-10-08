import React from 'react';

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

