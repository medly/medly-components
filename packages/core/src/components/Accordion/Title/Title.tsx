import { ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { AccordionContext } from '../AccordionContext';
import * as Styled from './Title.styled';
import { Props } from './types';

export const Title: React.SFC<Props> & WithStyle = React.memo(({ children, color, bgColor }) => {
    const { isActive, toggle } = useContext(AccordionContext);
    return (
        <Styled.Wrapper isActive={isActive} onClick={toggle} color={color} bgColor={bgColor}>
            {children}
            <ExpandMoreIcon size="M" />
        </Styled.Wrapper>
    );
});

Title.displayName = 'Title';
Title.Style = Styled.Wrapper;
