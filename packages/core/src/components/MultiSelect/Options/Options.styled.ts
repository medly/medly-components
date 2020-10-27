import { SvgIcon } from '@medly-components/icons';
import { getFontStyle, styled, WithThemeProp } from '@medly-components/utils';
import Checkbox from '../../Checkbox';
import { SelectorGroup } from '../../Selectors';
import { Chip } from '../Chip/Chip';

export const ChipArea = styled.div<WithThemeProp>`
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
    padding: 0.5rem 1.3rem;
    ${Chip.Style} {
        padding: 0 0.3rem 0 0.9rem;
        margin: 0.2rem;
        ${SvgIcon} {
            background-color: transparent;
            padding: 0.2rem;
        }
    }
    > p {
        margin: 0.3rem;
    }
`;

export const OptionsWrapper = styled.div<WithThemeProp & { size: 'S' | 'M' }>`
    position: absolute;
    top: ${({ theme, size }) => theme.textField.height[size]};
    box-shadow: ${({ theme }) => `0px 2px 8px ${theme.colors.grey[400]}`};
    background-color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    border-radius: 0.4rem;
    width: 100%;
    z-index: 1000;
`;

export const Options = styled.ul<WithThemeProp & { size: 'S' | 'M' }>`
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 20rem;
    overflow: auto;

    ${Checkbox.Style} {
        width: 100%;
        margin: 0;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        box-sizing: border-box;
        span {
            ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.multiSelect.options.textVariant[size] })}
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
