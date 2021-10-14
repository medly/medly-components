import React from 'react';
import { Props } from './types';

const InjectClassName: React.FunctionComponent<Props> = props => {
    const { className, children } = props;
    return (
        <>
            {React.Children.map(children, child => {
                return React.cloneElement(child as any, {
                    className
                });
            })}
        </>
    );
};

export default InjectClassName;
