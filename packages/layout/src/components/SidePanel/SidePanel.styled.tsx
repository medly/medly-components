import { defaultTheme } from '@medly-components/theme';
import styled, { css } from 'styled-components';
import { SidePanelStyledProps } from './types';

const leftPositioned = () => css`
    left: 0;
`;

const rightPositioned = () => css`
    right: 0;
`;

export const SidePanelStyled = styled('aside')<SidePanelStyledProps>`
    height: 100vh;
    background-color: ${({ theme }) => theme.sidePanel.bgColor};
    width: 0;
    position: fixed;
    z-index: 10;
    top: 0;
    transition: 0.2s;
    ${({ position }) => (position === 'left' ? leftPositioned() : rightPositioned())}
`;

SidePanelStyled.defaultProps = {
    position: 'left',
    theme: defaultTheme
};
