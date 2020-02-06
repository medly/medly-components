import { ExpandMoreIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, fullWidth, styled, WithThemeProp } from '@medly-components/utils';
import FieldWithLabel from '../FieldWithLabel';
import { SelectWrapperProps } from './types';

export const SelectWrapperStyled = styled('div')<SelectWrapperProps>`
    border: 1px solid ${({ theme }) => theme.select.borderColor};
    background-color: ${({ disabled, theme }) => (disabled ? theme.select.disabledBgColor : theme.select.bgColor)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    height: 35px;
    min-width: 150px;
    display: inline-flex;
    ${centerAligned()}

    ${props => props.fullWidth && fullWidth()};

    * {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }

    ${FieldWithLabel.Style} {
        margin: 0px;
        flex: 1;

        & > * {
            margin: 0px;
            border: none;
            background-color: transparent;
        }
    }

    &:focus-within {
        border-color: ${({ theme }) => theme.select.outlineColor};
    }
`;

SelectWrapperStyled.defaultProps = {
    theme: defaultTheme
};

export const SelectIconStyled = styled(ExpandMoreIcon)<WithThemeProp>`
    flex: 1;
    max-width: 20px;
    margin-right: 8px;
    font-size: 10px;
`;

SelectIconStyled.defaultProps = {
    theme: defaultTheme
};
