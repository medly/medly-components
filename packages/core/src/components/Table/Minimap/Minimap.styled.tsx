import { styled } from '@medly-components/utils';

export const MinimapContainer = styled('tr')<{ sliderWidth: number; offset: { left: number; bottom: number } }>`
    position: sticky;
    display: block;
    z-index: 999;
    left: ${({ offset }) => `${offset.left}px`};
    bottom: ${({ offset }) => `${offset.bottom}px`};
    width: ${({ sliderWidth }) => `${sliderWidth}px`};
    opacity: ${({ theme }) => theme.table.minimap.opacity.default};
    transition: opacity 200ms ease-in-out;
    &:hover {
        opacity: ${({ theme }) => theme.table.minimap.opacity.hovered};
    }
`;

export const Minimap = styled('td')`
    width: 100%;
    height: 4.6rem;
    display: block;
    position: absolute;
    background: ${({ theme }) => theme.table.minimap.bgColor};
    box-shadow: 0 0.4rem 0.6rem 0.3rem rgba(51, 51, 51, 0.1);
    border-radius: ${({ theme }) => theme.table.minimap.borderRadius};
`;

export const SliderRange = styled('div')<{ rangeWidth: number; padding: number }>`
    cursor: move;
    position: absolute;
    height: calc(100% - 1.6rem);
    margin: 0.8rem ${({ padding }) => `${padding}px`};
    width: ${({ rangeWidth }) => `${rangeWidth}px`};
`;

export const SliderContentWrapper = styled('div')<{ contentWidth: number }>`
    height: 100%;
    display: flex;
    flex-direction: row;
    width: ${({ contentWidth }) => `${contentWidth}px`};
`;

export const SliderContent = styled('div')<{ controllerWidth: number }>`
    height: 100%;
    width: ${({ controllerWidth }) => `${controllerWidth}px`};
    background: ${({ theme }) => theme.table.minimap.sliderContent.bgColor};
    & + & {
        margin-left: 0.5rem;
    }
`;
