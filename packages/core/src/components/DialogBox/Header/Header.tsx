import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, memo, useContext } from 'react';
import Text from '../../Text';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Header.styled';

const Component: FCC = memo(({ children }) => {
    const { id } = useContext(DialogBoxContext);

    return (
        <Styled.Header {...{ id: `${id}-header` }}>
            {Children.map(children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant="h4">{c}</Text> : c;
            })}
        </Styled.Header>
    );
});
Component.displayName = 'Header';
export const Header: FCC & WithStyle = Object.assign(Component, { Style: Styled.Header });
