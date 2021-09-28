import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import Text from '../../Text';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Header.styled';

const Component: React.FC = React.memo(({ children }) => {
    const { id } = useContext(DialogBoxContext);

    return (
        <Styled.Header {...{ id: `${id}-header` }}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant="h4">{c}</Text> : c;
            })}
        </Styled.Header>
    );
});
Component.displayName = 'Header';
export const Header: React.FC & WithStyle = Object.assign(Component, { Style: Styled.Header });
