import { SvgIcon } from '@medly-components/icons';
import { clearMarginPadding, css, styled } from '@medly-components/utils';
import Checkbox from '../../../Checkbox';
import Text from '../../../Text';
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

const wrapTextStyle = () => css`
    ${Text.Style} {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;

const frozenStyle = () => css`
    left: 0;
    z-index: 1;

    * {
        z-index: 1;
    }
`;

export const Cell = styled('td')<StyledProps>`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    position: ${({ frozen }) => (frozen ? 'sticky' : 'relative')};
    cursor: ${({ isRowSelectionCell }) => isRowSelectionCell && 'default'};
    padding: ${({ hidden, isRowSelectionCell }) => (hidden ? '0' : isRowSelectionCell ? '1.2rem' : '1.3rem 1.6rem')};
    justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start')};

    ${Checkbox.Style} {
        ${SvgIcon} {
            margin-right: 0;
        }
        ${clearMarginPadding()};
    }

    ${props => props.wrapText && wrapTextStyle}
    ${props => props.frozen && frozenStyle}
`;
Cell.defaultProps = {
    wrapText: true
};
