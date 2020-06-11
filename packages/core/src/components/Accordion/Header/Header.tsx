import { ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useContext } from 'react';
import { AccordionContext } from '../AccordionContext';
import * as Styled from './Header.styled';

export const Header: React.SFC & WithStyle = React.memo(({ children, ...restProps }) => {
    const [isActive, setActiveState] = useContext(AccordionContext),
        handleClick = useCallback(() => setActiveState(val => !val), []);

    return (
        <Styled.Wrapper aria-expanded={isActive} isActive={isActive} onClick={handleClick} {...restProps}>
            {children}
            <ExpandMoreIcon size="M" />
        </Styled.Wrapper>
    );
});

Header.displayName = 'Header';
Header.Style = Styled.Wrapper;
