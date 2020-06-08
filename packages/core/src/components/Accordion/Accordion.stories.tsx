import { AccordionTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

export const ThemeInterface: React.SFC<AccordionTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.accordion
};

export const CountStyle = styled(Text)`
    padding-left: 1rem;
    align-items: center;
`;

export const Data = styled(Text)`
    align-items: center;
`;
