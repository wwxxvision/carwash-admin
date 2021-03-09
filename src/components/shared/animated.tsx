import React from 'react';
import { Spring, SpringProps } from 'react-spring/renderprops';

type AnimatedProps<T extends object> = {
    options: SpringProps<T>,
}

export const Animated: React.FC<AnimatedProps<object>> = ({ children, options }) => <Spring {...options}>{style => <div style={style}>{children}</div>}</Spring>