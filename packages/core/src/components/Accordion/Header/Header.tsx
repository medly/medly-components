import { ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import { useCallback, useContext, memo } from 'react';
import { AccordionContext } from '../AccordionContext';
import { Wrapper } from './Header.styled';
import type { FC } from 'react';

const Component: FC = memo(({ children, ...restProps }) => {
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
export const Header: FC & WithStyle = Object.assign(Component, { Style: Wrapper });
