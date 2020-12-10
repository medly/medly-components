import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import Text from '../../Text';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Header.styled';

export const Header: React.FC & WithStyle = React.memo(({ children }) => {
    const { id } = useContext(DialogBoxContext);

    return (
        <Styled.Header {...{id: `${id}-header` }}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant='h4'>{c}</Text> : c;
            })}
        </Styled.Header>
    );
});
Header.displayName = 'Header';
Header.Style = Styled.Header;
