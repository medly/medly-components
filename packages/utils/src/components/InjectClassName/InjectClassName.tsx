import { Children, cloneElement, FCC } from 'react';
import { Props } from './types';

const InjectClassName: FCC<Props> = props => {
    const { className, children } = props;
    return (
        <>
            {Children.map(children, child => {
                return cloneElement(child as any, {
                    className
                });
            })}
        </>
    );
};

export default InjectClassName;
