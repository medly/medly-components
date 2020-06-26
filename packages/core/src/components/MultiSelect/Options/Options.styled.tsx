import { styled } from '@medly-components/utils';
import Checkbox from '../../Checkbox';
import FieldWithLabel from '../../FieldWithLabel';
import { OptionsStyledProps, OptionStyledProps } from './types';

export const Options = styled('ul')<OptionsStyledProps>`
    list-style: none;
    position: absolute;
    top: 5.6rem;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow: auto;
    border: 1px solid ${({ theme }) => theme.select.borderColor};
    background-color: ${({ theme }) => theme.select.bgColor};
    box-sizing: border-box;
    border-radius: 4px;

    ${Checkbox.Style} {
        width: calc(100% - 10px);
        margin: 0;
        padding: 5px;
    }

    ${FieldWithLabel.Label} {
        margin-bottom: 0;
        ${Checkbox.Style} {
            padding: 0 5px 5px 0;
        }
    }

    ${FieldWithLabel.Field} {
        ${Checkbox.Style} {
            padding: 5px 5px 5px 0;
        }
    }
`;

export const Option = styled('li').attrs(({ theme: { select } }) => ({ ...select }))<OptionStyledProps>`
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
