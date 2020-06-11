import { css, styled } from '@medly-components/utils';
import Text from '../Text';
import { StyledProps } from './types';

const getAvatarSize = ({ theme: { avatar }, size }: StyledProps) => {
    const { sizes, defaults } = avatar;
    return sizes[size || defaults.size].avatarSize;
};

const getShadowColor = ({ theme: { avatar }, hoverTextShadowColor, hoverImgShadowColor, isImage }: StyledProps) => {
    return isImage
        ? hoverImgShadowColor || avatar.defaults.hover.imgShadowColor
        : hoverTextShadowColor || avatar.defaults.hover.textShadowColor;
};

const getTextStyle = ({ theme, ...props }: StyledProps) => {
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

export const AvatarStyled = styled('div').attrs(({ theme: { avatar: { defaults } } }: StyledProps) => ({
    defaults
}))<StyledProps>`
    display: inline-block;
    text-align: center;
    width: ${getAvatarSize};
    height: ${getAvatarSize};
    border-radius: 50%;
    overflow: hidden;
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};

    ${getTextStyle}

    img {
        width: ${getAvatarSize};
        height: ${getAvatarSize};
        object-fit: cover;
        border: 0.1rem solid ${({ defaults }) => defaults.borderColor};
        box-sizing: border-box;
        border-radius: 50%;
    }

    &:hover {
        background: ${({ defaults, hoverBgColor }) => hoverBgColor || defaults.hover.bgColor};
        box-shadow: 0 0.4rem 0.8rem ${getShadowColor};
        ${Text.Style} {
            color: ${({ defaults, hoverTextColor }) => hoverTextColor || defaults.hover.textColor};
        }
    }
`;
