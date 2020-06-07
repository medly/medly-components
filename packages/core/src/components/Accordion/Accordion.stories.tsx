import { AccordionTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { Accordion } from './Accordion';

export const ThemeInterface: React.SFC<AccordionTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.accordion
};

const CountStyle = styled(Text)`
    padding-left: 1rem;
`;

export const Basic = () => {
    return (
        <Accordion>
            <Accordion.Title>
                <Text> Uploaded Files</Text>
            </Accordion.Title>
            <Accordion.Content>
                <div>File 1</div>
            </Accordion.Content>
        </Accordion>
    );
};

export const TitleWithCount = () => {
    return (
        <Accordion>
            <Accordion.Title bgColor={defaultTheme.colors.springTeal[100]}>
                <Text> Uploaded Files</Text>
                <CountStyle textColor={defaultTheme.colors.communityBlue[500]} textWeight="Strong">
                    34
                </CountStyle>
            </Accordion.Title>
            <Accordion.Content>
                <div>File 1</div>
            </Accordion.Content>
        </Accordion>
    );
};
