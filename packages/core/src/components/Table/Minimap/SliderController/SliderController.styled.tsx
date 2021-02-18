import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';

const getStyleByState = (state: 'default' | 'hovered' | 'pressed') => css`
    ${SvgIcon} {
        * {
            fill: ${({ theme }) => theme.table.minimap.sliderController.color[state]};
        }
    }
`;

export const SliderController = styled('div')<{ controllerWidth: number }>`
    width: ${({ controllerWidth }) => `${controllerWidth}px`};
    left: 0;
    top: 0;
    cursor: move;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;

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
