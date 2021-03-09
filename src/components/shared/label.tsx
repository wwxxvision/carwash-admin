import React from 'react';

interface LabelProps {
    text: string
}

export const Label: React.FC<LabelProps> = ({ text, children }) => <label><span>{text}</span>{children}</label>