import { centerAligned, styled } from '@medly-components/utils';
import Text from '../../Text';
import { getPageNumberButtonStyleByState, PageNumberButton } from '../Pagination.styled';

export const PaginationBackgroundStyled = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 4;
    ${centerAligned()}
`;

export const PageEllipsisOverlay = styled('div')`
    max-height: 20rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0.2rem 0.8rem ${({ theme }) => theme.colors.grey[400]};
    border-radius: 0.4rem;

    & > ${PageNumberButton} {
        display: block;
        border-radius: 0;
        margin: 0;
        height: 4rem;
        width: 4rem;
        padding: 0.4rem;

        & > ${Text.Style} {
            line-height: 3.2rem;
        }

        &:hover {
            ${getPageNumberButtonStyleByState('overlayPageNumber', 'hovered')}
        }

        &:active {
            ${getPageNumberButtonStyleByState('overlayPageNumber', 'hovered')}
        }
    }
`;
