import { ExpandMoreIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, css, fullWidth, oppositePositionalspacing, styled, WithThemeProp } from '@medly-components/utils';
import FieldWithLabel from '../FieldWithLabel';
import Input from '../Input';
import Text from '../Text';
import { SelectWrapperProps } from './types';

export const SelectWrapperStyled = styled('div')<SelectWrapperProps>`
    border: 1px solid ${({ theme }) => theme.select.borderColor};
    background-color: ${({ theme }) => theme.select.bgColor};
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    height: 35px;
    min-width: 150px;
    display: inline-flex;
    ${centerAligned()}

    ${props => props.fullWidth && fullWidth()};

    ${({ description, theme, labelPosition }) =>
        description &&
        css`
            margin: ${oppositePositionalspacing(labelPosition, theme.spacing.S)};
            & ~ ${Text.Style} {
                color: ${theme.select.desciptionColor};
            }
        `}

    ${FieldWithLabel} {
        margin: 0px;
        cursor: pointer;
        flex: 1;

        ${Input.Style} {
            margin: 0px;
            cursor: pointer;
            border: none;
            background-color: transparent;
        }
    }
`;

SelectWrapperStyled.defaultProps = {
    theme: defaultTheme
};

export const SelectIconStyled = styled(ExpandMoreIcon)<WithThemeProp>`
    flex: 1;
    max-width: 20px;
    margin-right: 8px;
    cursor: pointer;
`;

SelectIconStyled.defaultProps = {
    theme: defaultTheme
};
