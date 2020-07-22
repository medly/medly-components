import { SvgIcon } from '@medly-components/icons/src';
import { styled } from '@medly-components/utils';
import Checkbox from '../../Checkbox';
import FieldWithLabel from '../../FieldWithLabel';
import { Chip } from '../Chip/Chip';
import { OptionsStyledProps, OptionStyledProps } from './types';

export const ChipArea = styled.div<OptionsStyledProps>`
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
    padding: 8px;
    ${Chip.Style} {
        border: 1px solid ${({ theme }) => theme.colors.grey[300]};
        background-color: ${({ theme }) => theme.colors.grey[100]};
        color: ${({ theme }) => theme.colors.grey[900]};
        padding: 0 0.6rem 0 1rem;
        margin: 0.2rem;
        ${SvgIcon} {
            background-color: transparent;
            padding: 0;
            * {
                fill: ${({ theme }) => theme.colors.grey[800]};
            }
            &:hover {
                background-color: transparent;
            }
        }
    }
`;

export const OptionsWrapper = styled.div<OptionsStyledProps>`
    position: absolute;
    top: 5.6rem;
    border: 1px solid ${({ theme }) => theme.select.borderColor};
    background-color: ${({ theme }) => theme.select.bgColor};
    box-sizing: border-box;
    border-radius: 0.4rem;
`;

export const Options = styled.ul<OptionsStyledProps>`
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 150px;
    overflow: auto;

    ${Checkbox.Style} {
        width: calc(100% - 10px);
        margin: 0;
        padding: 0.5rem;
    }

    ${FieldWithLabel.Label} {
        margin-bottom: 0;
        ${Checkbox.Style} {
            padding: 0 0.5rem 0.5rem 0;
        }
    }

    ${FieldWithLabel.Field} {
        ${Checkbox.Style} {
            padding: 0.5rem 0.5rem 0.5rem 0;
        }
    }
`;

export const Option = styled.li.attrs(({ theme: { select } }) => ({ ...select }))<OptionStyledProps>`
    cursor: pointer;
    padding: ${({ isChild }) => (isChild ? '5px 5px 5px 15px' : '5px')};
    color: ${({ selected, selectedTextColor }) => (selected ? selectedTextColor : 'inherit')};
    background-color: ${({ selected, selectedBgColor, bgColor }) => (selected ? selectedBgColor : bgColor)};

    :last-child {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    :first-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
`;
