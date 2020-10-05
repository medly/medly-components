import { centerAligned, styled } from '@medly-components/utils';
import { getPageNumberButtonStyleByState, PageNumberButton } from '../Pagination.styled';

export const PaginationBackgroundStyled = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1000;
    ${centerAligned()}
`;

export const PageEllipsisOverlay = styled('div')`
    max-height: 20rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    background: #fff;
    box-shadow: 0 2px 8px #b0bcc8;
    border-radius: 4px;

    & > ${PageNumberButton} {
        display: block;
        line-height: 3.2rem;
        border-radius: 0;
        margin: 0;
        height: 4rem;
        width: 4rem;
        padding: 0.4rem;

        &:hover {
            ${getPageNumberButtonStyleByState('overlayPageNumber', 'hovered')}
        }

        &:active {
            ${getPageNumberButtonStyleByState('overlayPageNumber', 'hovered')}
        }
    }
`;
