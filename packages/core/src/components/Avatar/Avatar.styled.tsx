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
        { fontVariant, avatarSize } = sizes[size || defaults.size];

    return css`
        color: ${textColor || defaults.textColor};
        background: ${bgColor || defaults.bgColor};

        ${Text.Style} {
            line-height: ${avatarSize};
            font-size: ${theme.font.variants[fontVariant].fontSize};
            letter-spacing: ${theme.font.variants[fontVariant].letterSpacing};
        }
    `;
};

export const AvatarStyled = styled('div')<Props>`
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
    }
`;
