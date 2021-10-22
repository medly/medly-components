import { SvgIcon } from '@medly-components/icons';
import { centerAligned, WithThemeProp } from '@medly-components/utils';
import styled, { css } from 'styled-components';

const getOuterStyle = ({ theme, state }: WithThemeProp & { state: 'default' | 'hovered' | 'disabled' }) => css`
        color: ${theme.multiSelect.options.chip.color[state]};
        border-color: ${theme.multiSelect.options.chip.borderColor[state]};
        background-color: ${theme.multiSelect.options.chip.bgColor[state]};
    `,
    getIconStyle = ({ theme, state }: WithThemeProp & { state: 'default' | 'hovered' | 'disabled' }) => css`
        background-color: ${theme.multiSelect.options.chip.icon.bgColor[state]};
        * {
            fill: ${theme.multiSelect.options.chip.icon.color[state]};
        }
    `;

export const Chip = styled('button').attrs({ type: 'button' })`
    user-select: none;
    border: 1px solid;
    max-width: max-content;
    cursor: default;
    border-radius: ${({ theme }) => theme.multiSelect.options.chip.borderRadius};
    padding: 0 0.3rem 0 0.9rem;
    margin: 0.2rem;

    ${centerAligned()}
    ${({ theme }) => getOuterStyle({ theme, state: 'default' })};
    ${SvgIcon} {
        padding: 0.2rem;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 0.6rem;
        font-size: 1.2rem;
        ${({ theme }) => getIconStyle({ theme, state: 'default' })};
        &:hover {
            ${({ theme }) => getIconStyle({ theme, state: 'hovered' })};
        }
    }

    &:focus {
        outline: none;
    }
    &:hover {
        ${({ theme }) => getOuterStyle({ theme, state: 'hovered' })};
    }
    &:disabled {
        ${({ theme }) => getOuterStyle({ theme, state: 'disabled' })};
        & > ${SvgIcon} {
            cursor: not-allowed;
            ${({ theme }) => getIconStyle({ theme, state: 'disabled' })};
        }
    }
`;
