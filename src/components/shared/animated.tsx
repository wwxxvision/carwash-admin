import React from 'react';
import { useSpring, animated, UseSpringProps } from 'react-spring'

type AnimatedProps<T extends object> = {
    options: UseSpringProps<T>
}

export const Animated: React.FC<AnimatedProps<object>> = ({ children, options}) => {
    const props = useSpring(options);
    
    return <animated.div style={props}>{children}</animated.div>
}