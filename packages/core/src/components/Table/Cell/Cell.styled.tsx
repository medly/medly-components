import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import Checkbox from '../../Checkbox';
import Text from '../../Text';
import { StyledProps } from './types';

export const CustomComponentWrapper = styled('div')``;

export const LoadingDiv = styled('div')`
    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }
    width: 100%;
    height: 100%;
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: ${({ theme }) => theme.colors.grey[100]};
    background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.grey[100]} 8%,
        ${({ theme }) => theme.colors.grey[200]} 18%,
        ${({ theme }) => theme.colors.grey[100]} 33%
    );
    background-size: 800px 104px;
    position: relative;
`;

export const Cell = styled('td')<StyledProps>`
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    padding: ${({ hidden }) => (hidden ? '0' : '5px 10px')};
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start')};
    align-items: center;
    overflow: hidden;
    ${({ isRowSelectionCell }) =>
        isRowSelectionCell &&
        css`
            cursor: default;
            user-select: none;
        `};

    ${Checkbox.Style} {
        display: flex;
        flex: 1;
        margin: 0;
        padding: 0;
        ${SvgIcon} {
            margin-right: 0;
        }
    }

    ${Text.Style} {
        white-space: nowrap;
    }

    ${props =>
        props.frozen &&
        css`
            position: sticky;
            left: 0;
            z-index: 2;
            background-color: inherit;

            * {
                z-index: 2;
            }
        `}
`;
