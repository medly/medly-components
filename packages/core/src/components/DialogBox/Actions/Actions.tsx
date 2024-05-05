import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo, useContext } from 'react';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Actions.styled';
import { DialogBoxActionUserProps } from './types';

const Component: FCC<DialogBoxActionUserProps> = memo(({ children, alignItems }) => {
    const { id } = useContext(DialogBoxContext);

    return <Styled.Actions {...{ alignItems, id: `${id}-actions` }}>{children}</Styled.Actions>;
});
Component.displayName = 'Actions';
export const Actions: FCC<DialogBoxActionUserProps> & WithStyle = Object.assign(Component, { Style: Styled.Actions });
