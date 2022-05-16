import { ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useCallback, useContext } from 'react';
import { AccordionContext } from '../AccordionContext';
import { HeaderProps } from '../types';
import { Wrapper } from './Header.styled';

const Component: FC<HeaderProps> = memo(({ children, iconColor, ...restProps }) => {
    const [isActive, setActiveState] = useContext(AccordionContext),
        handleClick = useCallback(() => setActiveState(val => !val), []);

    return (
        <Wrapper aria-expanded={isActive} isActive={isActive} onClick={handleClick} {...restProps}>
            {children}
            <ExpandMoreIcon iconColor={iconColor} size="M" />
        </Wrapper>
    );
});

Component.displayName = 'Header';
export const Header: FC<HeaderProps> & WithStyle = Object.assign(Component, { Style: Wrapper });
