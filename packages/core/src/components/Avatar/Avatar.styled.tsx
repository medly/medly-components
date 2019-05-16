import { styled } from '@medly-components/utils';
import Text from '../Text';
import { Props, StyledProps } from './types';

const getAvatarSize = ({ avatarSize }: StyledProps) => avatarSize;

const getMappedProps = ({ theme, ...props }: Props) => {
    const { font, avatar } = theme;
    const { defaults } = avatar;
    const { size, textColor, bgColor } = props;
    const { avatarSize, fontSize } = avatar.sizes[size || defaults.size];

    return {
        avatarSize,
        fontSize: font.sizes[fontSize],
        bgColor: bgColor || defaults.bgColor,
        textColor: textColor || defaults.textColor
    };
};

export const AvatarStyled = styled('div').attrs(getMappedProps)<StyledProps>`
    display: inline-block;
    text-align: center;
    width: ${getAvatarSize};
    height: ${getAvatarSize};
    line-height: ${getAvatarSize};
    border-radius: 50%;
    overflow: hidden;
    color: ${({ textColor }) => textColor};
    background: ${({ bgColor }) => bgColor};

    ${Text.Style} {
        font-size: ${({ fontSize }) => fontSize};
    }

    img {
        width: ${getAvatarSize};
        height: ${getAvatarSize};
        object-fit: cover;
    }
`;
