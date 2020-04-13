import { ExpandMoreIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, styled, WithThemeProp } from '@medly-components/utils';
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
    width: 100%;
    display: inline-flex;
    ${centerAligned()}

    * {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }

    ${FieldWithLabel.Style} {
        margin: 0;
        flex: 1;

        & > * {
            margin: 0;
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
    max-width: 24px;
    margin-right: ${({ theme }) => theme.spacing.S1};
`;

SelectIconStyled.defaultProps = {
    theme: defaultTheme
};
