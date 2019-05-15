import { styled } from '@medly-components/utils';
import { Props } from './types';

const getSize = ({ size }: Partial<Props>) => size;
const getMappedProps = ({ theme: { avatar }, ...props }: Props) => {
    const { defaults } = avatar;
    const { size, textColor, bgColor } = props;
    return {
        bgColor: bgColor || defaults.bgColor,
        size: avatar[size || defaults.size].size,
        textColor: textColor || defaults.textColor
    };
};

export const AvatarStyled = styled('div').attrs(getMappedProps)<Props>`
    width: ${getSize};
    height: ${getSize};
    line-height: ${getSize};
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    overflow: hidden;
    color: ${({ textColor }) => textColor};
    background: ${({ bgColor }) => bgColor};

    img {
        width: ${getSize};
        height: ${getSize};
        object-fit: cover;
    }
`;
