import { ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useContext } from 'react';
import { AccordionContext } from '../AccordionContext';
import { Wrapper } from './Header.styled';

const Component: React.FC = React.memo(({ children, ...restProps }) => {
    const [isActive, setActiveState] = useContext(AccordionContext),
        handleClick = useCallback(() => setActiveState(val => !val), []);

    return (
        <Wrapper aria-expanded={isActive} isActive={isActive} onClick={handleClick} {...restProps}>
            {children}
            <ExpandMoreIcon size="M" />
        </Wrapper>
    );
});

Component.displayName = 'Header';
export const Header: React.FC & WithStyle = Object.assign(Component, { Style: Wrapper });
