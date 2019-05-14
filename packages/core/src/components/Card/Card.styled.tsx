import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { Props } from './types';

export const CardStyled = styled('div').attrs(({ theme: { card } }) => ({ ...card }))<Props>`
    display: inline-flex;
    width: ${({ width }) => (width ? `${width}` : '250px')};
    height: ${({ height }) => (height ? `${height}` : '250px')};
    background-color: ${({ bgColor }) => bgColor};
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 ${({ shadowColor }) => shadowColor};
    padding: 10px;
    border: 1px solid ${({ borderColor }) => borderColor};

    ${({ center }) =>
        center &&
        css`
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `}
`;

CardStyled.defaultProps = {
    theme: defaultTheme
};
