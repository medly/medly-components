import { ClearIcon } from '@medly-components/icons';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export const HeaderStyled = styled('div')<{ showShadow: boolean }>`
    padding: 1.9rem 2.4rem 2.2rem;
    position: relative;
    box-shadow: ${({ theme, showShadow }) => showShadow && `0 1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};
`;

const getStyle = ({ styleType }: { styleType: 'default' | 'hovered' | 'pressed' }) => css`
    background-color: ${({ theme }) => theme.drawer.closeIcon.bgColor[styleType]};
    * {
        fill: ${({ theme }) => theme.drawer.closeIcon.color[styleType]};
    }
`;

export const CloseIconStyled = styled(ClearIcon)`
    position: absolute;
    right: 1.4rem;
    top: 1.5rem;
    border-radius: ${({ theme }) => theme.drawer.closeIcon.borderRadius};

    ${props => getStyle({ ...props, styleType: 'default' })}

    &:hover {
        ${props => getStyle({ ...props, styleType: 'hovered' })}
        box-shadow:  0 2px 8px ${({ theme }) => rgba(theme.drawer.closeIcon.bgColor.hovered, 0.5)}
    }

    &:active {
        ${props => getStyle({ ...props, styleType: 'pressed' })}
        box-shadow: none;
    }
`;
