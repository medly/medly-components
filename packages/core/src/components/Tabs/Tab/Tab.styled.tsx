import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import { StyledProps } from './types';

export const Button = styled('button').attrs(({ theme: { tabs } }) => ({ tabs }))<StyledProps>`
    background-color: transparent;
    border: none;
    padding: 8px 15px;
    user-select: none;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${SvgIcon} {
        margin-bottom: 5px;
    }

    ${({ active, tabs }) =>
        active &&
        css`
            color: ${tabs.activeTabTextColor};
            border-bottom: 2px solid ${tabs.activeTabTextColor};
            ${SvgIcon} {
                * {
                    fill: ${tabs.activeTabTextColor};
                }
            }
        `}
`;
