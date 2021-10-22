import styled, { css } from 'styled-components';

export const MinimapContainer = styled('tr')`
    position: sticky;
    display: inline;
    z-index: 5;
    left: calc(100% - 19rem);
    bottom: 9.5rem;
    opacity: ${({ theme }) => theme.table.minimap.opacity.default};
    transition: opacity 200ms ease-in-out;
    &:hover {
        opacity: ${({ theme }) => theme.table.minimap.opacity.hovered};
    }
`;

export const Minimap = styled('td')<{ sliderWidth: number }>`
    height: 4.6rem;
    display: block;
    position: absolute;
    width: ${({ sliderWidth }) => `${sliderWidth}px`};
    background: ${({ theme }) => theme.table.minimap.bgColor};
    box-shadow: 0 0.4rem 0.6rem 0.3rem rgba(51, 51, 51, 0.1);
    border-radius: ${({ theme }) => theme.table.minimap.borderRadius};
`;

export const SliderRange = styled('div')<{ rangeWidth: number; padding: number }>`
    cursor: move;
    left: 0;
    top: 0;
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
        margin-left: 0.234rem;
    }
`;

/* slider controller styles */
const getBorderStyleByState = (state: 'default' | 'hovered' | 'pressed') => css`
    border: 2px solid ${({ theme }) => theme.table.minimap.sliderController.borderColor[state]};
`;

export const SliderController = styled('div')<{ controllerWidth: number }>`
    width: ${({ controllerWidth }) => `${controllerWidth}px`};
    left: 0;
    top: 0;
    cursor: move;
    height: 100%;
    position: absolute;

    ${getBorderStyleByState('default')}

    :hover {
        ${getBorderStyleByState('hovered')}
    }

    :active {
        ${getBorderStyleByState('pressed')}
    }
`;
