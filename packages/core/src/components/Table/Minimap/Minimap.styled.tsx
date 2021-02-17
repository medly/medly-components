import { styled } from '@medly-components/utils';

export const MinimapContainer = styled('tr')<{ sliderWidth: number; offset: { left: number; bottom: number } }>`
    position: sticky;
    display: block;
    z-index: 999;
    left: ${({ offset }) => `${offset.left}px`};
    bottom: ${({ offset }) => `${offset.bottom}px`};
    width: ${({ sliderWidth }) => `${sliderWidth}px`};
    opacity: ${({
        theme: {
            table: { minimap }
        }
    }) => minimap.opacity.default};
    transition: opacity 400ms ease-in-out;
    &:hover {
        opacity: ${({
            theme: {
                table: { minimap }
            }
        }) => minimap.opacity.hovered};
        transition-delay: 0ms;
    }
`;

export const Minimap = styled('td')`
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    background: ${({
        theme: {
            table: { minimap }
        }
    }) => minimap.bgColor};
    height: 4.6rem;
    box-shadow: 0 0.4rem 0.6rem 0.3rem rgba(51, 51, 51, 0.1);
    z-index: 999;
    border-radius: ${({
        theme: {
            table: { minimap }
        }
    }) => minimap.borderRadius};
`;

export const SliderRange = styled('div')<{ rangeWidth: number; leftOffset: number }>`
    position: absolute;
    cursor: pointer;
    left: ${({ leftOffset }) => `${leftOffset}px`};
    width: ${({ rangeWidth }) => `${rangeWidth}px`};
    top: 0;
    z-index: 999;
`;

export const SliderContent = styled('div')<{ controllerWidth: number }>`
    width: ${({ controllerWidth }) => `${controllerWidth}px`};
    margin: 0.8rem 0.25rem;
    height: 3rem;
    background: ${({
        theme: {
            table: { minimap }
        }
    }) => minimap.sliderContent.bgColor};
    z-index: 999;
`;

export const SliderContentWrapper = styled('div')<{ contentWidth: number }>`
    display: flex;
    flex-direction: row;
    width: ${({ contentWidth }) => `${contentWidth}px`};
    z-index: 999;

    & > div:nth-child(1) {
        margin-left: 0;
    }

    & > div:last-child {
        margin-right: 0;
    }
`;
