import { Children, cloneElement, FunctionComponent } from 'react';
import { Props } from './types';

const InjectClassName: FunctionComponent<Props> = props => {
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
