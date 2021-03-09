import React from 'react';
import { Animated } from './animated';

export const SmoothDisplayed: React.FC = ({ children }) => <Animated options={{ from: { opacity: 0 }, to: {opacity: 1} }}>{children}</Animated>