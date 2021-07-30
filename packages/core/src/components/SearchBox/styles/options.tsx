import { css } from '@medly-components/utils';
import { OptionStyled } from '../../SingleSelect/Options/Option/Option.styled';
import { Props } from '../types';

const activeOptionStyle = ({ theme }: Props) => {
    return css`
        border-radius: 0.8rem;
        box-shadow: ${theme.searchBox.options.boxShadow};
        padding-bottom: 1.2rem;
    `;
};

const nonActiveOptionStyle = () => {
    return css`
        border: none;
        padding-bottom: 0;
    `;
};

const getMediumOptionStyle = () => {
    return css`
        top: 4.7rem;
        li {
            width: calc(100% - 1.6rem);
            margin: 0 0.8rem;

            span,
            strong {
                font-size: 1.6rem;
                line-height: 2.6rem;
            }
        }
    `;
};

const getSmallOptionStyle = () => {
    return css`
        top: 3.9rem;
        li {
            width: calc(100% - 0.8rem);
            margin: 0 0.4rem;

            span,
            strong {
                font-size: 1.4rem;
                line-height: 2.2rem;
            }
        }
    `;
};

export const getOptionsStyles = ({ theme, size, areOptionsVisible }: Props & { areOptionsVisible?: boolean }) => css`
    box-shadow: none;
    border: none;
    padding: 0;
    box-sizing: content-box;
    left: -1.5px;
    width: calc(100% + 3px);
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${theme.colors.white};
    ${areOptionsVisible ? activeOptionStyle : nonActiveOptionStyle};
    max-height: 21rem;
    border-radius: 0.8rem;

    svg {
        display: none;
    }

    strong {
        font-weight: normal;
    }

    ${OptionStyled} {
        &:hover {
            background-color: ${theme.colors.grey[50]};
        }
    }
    ${size === 'M' ? getMediumOptionStyle : getSmallOptionStyle};
`;
