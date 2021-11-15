import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import { useContext, memo, Children } from 'react';
import Text from '../../Text';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Header.styled';
import type { FC } from 'react';

const Component: FC = memo(({ children }) => {
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
export const Header: FC & WithStyle = Object.assign(Component, { Style: Styled.Header });
