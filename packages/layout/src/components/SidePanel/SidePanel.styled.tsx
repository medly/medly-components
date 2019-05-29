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
    background-color: pink;
    width: 0px;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    ${({ position }) => (position === 'left' ? leftPositioned() : rigthPositioned())}
`;

SidePanelStyled.defaultProps = {
    position: 'left',
    theme: defaultTheme
};
