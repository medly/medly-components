import { SvgIcon } from '@medly-components/icons';
import { styled, WithThemeProp } from '@medly-components/utils';
import Checkbox from '../../Checkbox';
import { SelectorGroup } from '../../Selectors';
import { Chip } from '../Chip/Chip';

export const ChipArea = styled.div<WithThemeProp>`
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
    padding: 0.5rem 1.3rem;
    ${Chip.Style} {
        border: 1px solid ${({ theme }) => theme.colors.grey[300]};
        background-color: ${({ theme }) => theme.colors.grey[100]};
        color: ${({ theme }) => theme.colors.grey[900]};
        padding: 0 0.3rem 0 1rem;
        margin: 0.2rem;
        span {
            font-size: 1.4rem;
            line-height: 2.2rem;
        }
        ${SvgIcon} {
            background-color: transparent;
            padding: 0.2rem;
            * {
                fill: ${({ theme }) => theme.colors.grey[800]};
            }
            &:hover {
                border-radius: 50%;
                background-color: ${({ theme }) => theme.colors.grey[400]};
                * {
                    fill: ${({ theme }) => theme.colors.black};
                }
            }
        }
        &:hover {
            border-color: ${({ theme }) => theme.colors.grey[400]};
        }
    }
    > p {
        margin: 0.3rem;
    }
`;

export const OptionsWrapper = styled.div<WithThemeProp>`
    position: absolute;
    top: 5.6rem;
    box-shadow: ${({ theme }) => `0px 2px 8px ${theme.colors.grey[400]}`};
    background-color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    border-radius: 0.4rem;
    width: 100%;
    z-index: 1;
`;

export const Options = styled.ul<WithThemeProp>`
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow: auto;

    ${Checkbox.Style} {
        width: 100%;
        margin: 0;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        box-sizing: border-box;
        span {
            font-size: 1.6rem;
            line-height: 2.6rem;
        }
        &:hover {
            background-color: ${({ theme }) => theme.colors.grey[50]};
        }
    }

    > ${Checkbox.Style} {
        padding: 0.7rem 0 0.7rem 1.3rem;
        width: 100%;
        box-sizing: border-box;
    }

    > div {
        width: 100%;
        box-sizing: border-box;
    }

    ${SelectorGroup.Wrapper} {
        > label {
            padding-left: 1.3rem;
        }
    }
`;
