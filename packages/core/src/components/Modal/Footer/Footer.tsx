import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useContext } from 'react';
import { ModalContext } from '../Modal.context';
import * as Styled from './Footer.styled';
import { ModalFooterProps } from './types';

const Component: FC<ModalFooterProps> = memo(({ children, alignItems }) => {
    const { id, scrollState, isSmallScreen } = useContext(ModalContext);

    return <Styled.Footer {...{ scrollState, isSmallScreen, alignItems, id: `${id}-actions` }}>{children}</Styled.Footer>;
});
Component.displayName = 'Footer';
export const Footer: FC<ModalFooterProps> & WithStyle = Object.assign(Component, { Style: Styled.Footer });
