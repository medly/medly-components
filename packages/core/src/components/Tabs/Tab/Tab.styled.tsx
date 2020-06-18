import { SvgIcon } from '@medly-components/icons';
import { Theme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { TextStyled } from '../../Text/Text.styled';
import { TabSize } from '../types';
import { StyledProps } from './types';

const getTabSpacing = (tabSize: TabSize, hasIcon = false) => {
    const verticalSpacing = 15;
    let spacing = verticalSpacing;

    if (tabSize === 'M') {
        spacing = verticalSpacing + 4;
    }
    if (tabSize === 'L') {
        spacing = verticalSpacing + 12;
    }

    if (hasIcon) {
        return spacing - 1;
    }
    return spacing;
};

const activeStyle = ({ tabs }: Theme) =>
    css`
        color: ${tabs.activeTabTextColor};
        border-bottom: 4px solid ${tabs.activeTabTextColor};
        ${SvgIcon} {
            * {
                fill: ${tabs.activeTabTextColor};
            }
        }
    `;

export const Button = styled.button<StyledProps>`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grey[600]};
    border: 0;
    border-bottom: 4px solid transparent;
    padding: ${({ tabSize, hasIcon }) => `${getTabSpacing(tabSize, hasIcon)}px ${16}px`};
    user-select: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${TextStyled} {
        font-size: ${({ tabSize }) => (tabSize === 'S' ? '1.4rem' : '1.6rem')};
        margin-left: ${({ hasIcon }) => (hasIcon ? '16px' : 0)};
    }

    ${({ active, theme: { tabs } }) => active && activeStyle({ tabs })}
`;
