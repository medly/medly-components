import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo, useContext } from 'react';
import { ModalContext } from '../Modal.context';
import * as Styled from './Actions.styled';
import { ModalActionUserProps } from './types';

const Component: FCC<ModalActionUserProps> = memo(({ children, alignItems, ...restProps }) => {
    const { id, scrollState, isSmallScreen } = useContext(ModalContext);

    return (
        <Styled.Actions {...{ scrollState, isSmallScreen, alignItems, id: `${id}-actions` }} {...restProps}>
            {children}
        </Styled.Actions>
    );
});
Component.displayName = 'Actions';
export const Actions: FCC<ModalActionUserProps> & WithStyle = Object.assign(Component, { Style: Styled.Actions });
