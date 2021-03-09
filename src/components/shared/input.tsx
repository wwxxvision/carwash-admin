import React, {  HTMLProps } from 'react';

interface InputProps extends HTMLProps<HTMLInputElement> {
    onFocus(): void,
    onBlur(): void,
    onChange(): void,
}

export const Input: React.FC<InputProps> = (props) =>  <input {...props} /> 