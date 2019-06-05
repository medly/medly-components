import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { SidePanelStyledProps } from './types';

const leftPositioned = () => css`
    left: 0;
`;

const rigthPositioned = () => css`
    right: 0;
`;

export const SidePanelStyled = styled('div')<SidePanelStyledProps>`
    height: 100%;
    background-color: ${({ theme }) => theme.sidePanel.bgColor};
    width: 0px;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow: hidden;
    transition: 0.2s;
    ${({ position }) => (position === 'left' ? leftPositioned() : rigthPositioned())}
`;

SidePanelStyled.defaultProps = {
    position: 'left',
    theme: defaultTheme
};
