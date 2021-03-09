import React, { HTMLProps } from 'react';

interface CheckBoxProps extends HTMLProps<HTMLInputElement> {
    checked: boolean,
}

export const Label: React.FC<CheckBoxProps> = (props) => <div><input {...props}/><div></div></div>