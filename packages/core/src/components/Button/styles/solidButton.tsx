import { SvgIcon } from '@medly-components/icons';
import { css } from '@medly-components/utils';
import { rgba } from 'polished';
import { Props } from '../types';

const getStyle = (textColor: string, bgColor: string) => css`
    color: ${textColor};
    background: ${bgColor};
    ${SvgIcon} {
        * {
            fill: ${textColor};
        }
    }
`;

const getHoverShadow = (hoverShadow: boolean, bgColor: string) => {
  if (hoverShadow) {
    return css`
      box-shadow: 0 0.2rem 0.8rem ${rgba(bgColor, 0.35)};
    `;
  } else {
    return css``;
  }
}

export const solidButton = ({ theme, isLoading }: Props) => {
    const { textColor, bgColor, hoverShadow } = theme.button.solid;
    return css`
        &:disabled {
            ${getStyle(textColor.disabled, bgColor.disabled)}
        }

        &:not(:disabled) {
            &:not(:hover) {
                ${getStyle(textColor.default, isLoading ? bgColor.hovered : bgColor.default)}
            }
            &:active {
                ${getStyle(textColor.pressed, bgColor.pressed)}
            }
            &:not(:active):hover {
                ${getStyle(textColor.hovered, bgColor.hovered)}
                ${getHoverShadow(hoverShadow, bgColor.hovered)}
            }
          }
    `;
};
