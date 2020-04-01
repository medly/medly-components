import { ExpandMoreIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { fullWidth, styled, WithThemeProp } from '@medly-components/utils';
import FieldWithLabel from '../FieldWithLabel';
import { SelectWrapperProps } from './types';

export const SelectWrapperStyled = styled('div')<SelectWrapperProps>`
    border: 1px solid ${({ theme }) => theme.select.borderColor};
    background-color: ${({ disabled, theme }) => (disabled ? theme.select.disabledBgColor : theme.select.bgColor)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    min-width: 150px;
    display: inline-flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: flex-start;
    align-items: center;

    ${props => props.fullWidth && fullWidth()};

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
    flex: 1;
    max-width: 20px;
    margin-right: 8px;
    font-size: 10px;
`;

SelectIconStyled.defaultProps = {
    theme: defaultTheme
};
