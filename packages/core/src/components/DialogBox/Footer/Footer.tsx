import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useContext } from 'react';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Footer.styled';
import { DialogBoxFooterProps } from './types';

const Component: FC<DialogBoxFooterProps> = memo(({ children, alignItems }) => {
    const { id } = useContext(DialogBoxContext);

    return <Styled.Footer {...{ alignItems, id: `${id}-actions` }}>{children}</Styled.Footer>;
});
Component.displayName = 'Footer';
export const Footer: FC<DialogBoxFooterProps> & WithStyle = Object.assign(Component, { Style: Styled.Footer });
