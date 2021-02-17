import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';

const getStyleByState = (state: 'default' | 'hovered' | 'pressed') => css`
    ${SvgIcon} {
        * {
            fill: ${({
                theme: {
                    table: { minimap }
                }
            }) => minimap.sliderController.color[state]};
        }
    }
`;

export const SliderController = styled('div')<{ controllerWidth: number }>`
    width: ${({ controllerWidth }) => `${controllerWidth}px`};
    left: 0;
    cursor: move;
    height: 4.6rem;
    padding: 1.3rem 0;
    position: absolute;
    display: flex;
    top: 0;
    z-index: 999;

    ${getStyleByState('default')}

    :hover {
        ${getStyleByState('hovered')}
    }

    :active {
        ${getStyleByState('pressed')}
    }

    ${SvgIcon} {
        position: absolute;
        left: -0.4rem;
    }

    ${SvgIcon}:nth-child(2) {
        left: 1rem;
    }
`;
