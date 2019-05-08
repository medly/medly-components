import React from 'react';
import { Props } from './types';

const InjectClassName: React.FunctionComponent<Props> = props => {
    const { className, children } = props;
    return (
        <React.Fragment>
            {React.Children.map(children, child => {
                return React.cloneElement(child as any, {
                    className
                });
            })}
        </React.Fragment>
    );
};

export default InjectClassName;
