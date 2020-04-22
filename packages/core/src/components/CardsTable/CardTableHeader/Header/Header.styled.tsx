import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import Card from '../../../Card';
import Text from '../../../Text';
import { Props } from './types';


const getTextStyle = ({ theme }: Props) => {
    const {variants, defaults, weights} = theme.font

    return css`
        color: ${defaults.color};
        text-transform: uppercase;
        font-size: ${variants.h5.fontSize};
        letter-spacing: ${variants.h5.letterSpacing};
        font-weight: ${weights[variants.h5.fontWeight]};
        display: flex;
        align-items: center;
    `;
};

export const HeaderStyled = styled(Card)<Props>`
    padding: 0 10px;
    ${Text.Style} {
        ${getTextStyle};
    }

    ${SvgIcon} {
        cursor: pointer;
        margin-right: 1.0rem;
        padding-left: 1.0rem;
    }
`;
