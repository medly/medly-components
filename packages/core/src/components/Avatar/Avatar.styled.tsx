import { css, styled, WithThemeProp } from '@medly-components/utils';
import Text from '../Text';
import { StyledProps } from './types';

const getAvatarSize = ({ theme: { avatar }, size }: StyledProps & WithThemeProp) => {
    const { sizes, defaults } = avatar;
    return sizes[size || defaults.size].avatarSize;
};

const getShadowColor = ({ theme: { avatar }, hoverTextShadowColor, hoverImgShadowColor, isImage }: StyledProps & WithThemeProp) => {
    return isImage
        ? hoverImgShadowColor || avatar.defaults.hover.imgShadowColor
        : hoverTextShadowColor || avatar.defaults.hover.textShadowColor;
};

const hoverStyle = ({ theme, hoverBgColor, hoverTextColor }: StyledProps & WithThemeProp) => {
    const { defaults } = theme.avatar;
    return css`
        &:hover {
            background: ${hoverBgColor || defaults.hover.bgColor};
            box-shadow: 0 0.4rem 0.8rem ${getShadowColor};
            ${Text.Style} {
                color: ${hoverTextColor || defaults.hover.textColor};
            }
        }
    `;
};

const pressedStyle = ({ theme, pressedBgColor, pressedTextColor }: StyledProps & WithThemeProp) => {
    const { defaults } = theme.avatar;
    return css`
        &:active {
            background: ${pressedBgColor || defaults.pressed.bgColor};
            ${Text.Style} {
                color: ${pressedTextColor || defaults.pressed.textColor};
            }
        }
    `;
};

const getTextStyle = ({ theme, ...props }: StyledProps & WithThemeProp) => {
    const { size, textColor, bgColor } = props,
        { defaults, sizes } = theme.avatar,
        { avatarSize, fontSize } = sizes[size || defaults.size];

    return css`
        color: ${textColor || defaults.textColor};
        background: ${bgColor || defaults.bgColor};
        user-select: none;

        ${Text.Style} {
            line-height: ${avatarSize};
            font-size: ${fontSize};
            font-weight: ${theme.font.weights[defaults.fontWeight]};
            font-family: ${defaults.fontFamily};
        }
    `;
};

export const AvatarStyled = styled('div').attrs(({ theme: { avatar: { defaults } } }: StyledProps & WithThemeProp) => ({
    defaults
}))<StyledProps>`
    display: inline-block;
    text-align: center;
    min-width: max-content;
    width: ${getAvatarSize};
    height: ${getAvatarSize};
    border-radius: ${({ defaults }) => defaults.borderRadius};
    overflow: hidden;
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};

    ${getTextStyle}

    img {
        width: ${getAvatarSize};
        height: ${getAvatarSize};
        object-fit: cover;
        border: 0.1rem solid ${({ defaults }) => defaults.borderColor};
        box-sizing: border-box;
        border-radius: ${({ defaults }) => defaults.borderRadius};
    }

    ${props => props.onClick && hoverStyle};
    ${props => props.onClick && pressedStyle};
`;
