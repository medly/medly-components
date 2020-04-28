import { css, styled } from '@medly-components/utils';
import Text from '../Text';
import { Props } from './types';

const getAvatarSize = ({ theme: { avatar }, size }: Props) => {
    const { sizes, defaults } = avatar;
    return sizes[size || defaults.size].avatarSize;
};

const getTextStyle = ({ theme, ...props }: Props) => {
    const { size, textColor, bgColor } = props,
        { defaults, sizes } = theme.avatar,
        { avatarSize, fontSize} = sizes[size || defaults.size];

    return css`
        color: ${textColor || defaults.textColor};
        background: ${bgColor || defaults.bgColor};

        ${Text.Style} {
            line-height: ${avatarSize};
            font-size: ${fontSize};
            font-weight: ${defaults.fontWeight};
        }
    `;
};


export const AvatarStyled = styled('div').attrs(({ imgHoverShadow, hoverShadowColor, theme: {avatar: { defaults }}} : Props) => ({
    defaults, imgHoverShadow, hoverShadowColor }))<Props>`
    display: inline-block;
    text-align: center;
    width: ${getAvatarSize};
    height: ${getAvatarSize};
    border-radius: 50%;
    overflow: hidden;
    ${getTextStyle}

    img {
        width: ${getAvatarSize};
        height: ${getAvatarSize};
        object-fit: cover;
        border: 0.1rem solid ${({ defaults }) => defaults.borderColor};
        box-sizing: border-box;
        border-radius: 50%;

        &:hover{
            box-shadow:  ${({imgHoverShadow, defaults }) =>  imgHoverShadow || defaults.imgHoverShadowColor }; 
        } 
    }

    &:hover {
        box-shadow: ${({ defaults, hoverShadowColor, isImage}) => 
            hoverShadowColor ||  defaults[isImage ? 'imgHoverShadowColor' : 'hoverBoxShadowColor']};

        ${Text.Style} {
            color: ${({ defaults : {hoverTextColor}}) => hoverTextColor };
        }
        background: ${({ defaults : {hoverBgColor}}) => hoverBgColor };
    }  
`;