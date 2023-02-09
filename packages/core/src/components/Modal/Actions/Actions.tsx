import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useContext } from 'react';
import { ModalContext } from '../Modal.context';
import * as Styled from './Actions.styled';
import { ModalActionUserProps } from './types';

const Component: FC<ModalActionUserProps> = memo(({ children, alignItems, ...restProps }) => {
    const { id, scrollState, isSmallScreen } = useContext(ModalContext);

    return (
        <Styled.Actions {...{ scrollState, isSmallScreen, alignItems, id: `${id}-actions` }} {...restProps}>
            {children}
        </Styled.Actions>
    );
});
Component.displayName = 'Actions';
export const Actions: FC<ModalActionUserProps> & WithStyle = Object.assign(Component, { Style: Styled.Actions });
