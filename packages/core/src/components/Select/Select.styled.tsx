import { DropDownIcon } from '@medly-components/icons';
import { defaultTheme, Theme } from '@medly-components/theme';
import { css, fullWidth, positionalSpacing, styled, WithThemeProp } from '@medly-components/utils';
import Text from '../Text';
import { Props, SelectWrapperProps } from './types';

export const getFontSize = (theme: Theme) => theme.font.sizes[theme.text.defaults.textSize];
export const getFontWeight = (theme: Theme) => theme.font.weights[theme.text.defaults.textWeight];

export const SelectWrapperStyled = styled('div')<SelectWrapperProps>`
    margin: ${({ theme, labelPosition }) => positionalSpacing(labelPosition, theme.spacing.S)};
    border: 1px solid ${({ theme }) => theme.select.borderColor};
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    height: 35px;
    min-width: 150px;
    display: inline-block;

    ${props => props.fullWidth && fullWidth()};

    ${({ description, theme }) =>
        description &&
        css`
            & ~ ${Text.Style} {
                color: ${theme.select.desciptionColor};
            }
        `}
`;

SelectWrapperStyled.defaultProps = {
    theme: defaultTheme
};

export const SelectIconStyled = styled(DropDownIcon)<WithThemeProp>`
    position: absolute;
    top: calc(50% - ${props => getFontSize(props.theme)} / 2);
    right: 10px;
    cursor: pointer;
    font-size: ${props => getFontSize(props.theme)};
`;

SelectIconStyled.defaultProps = {
    theme: defaultTheme
};

export const SelectStyled = styled('select')<Props>`
    font-size: ${props => getFontSize(props.theme)};
    font-weight: ${props => getFontWeight(props.theme)};
    color: ${({ theme }) => theme.select.color};
    background-color: ${({ theme }) => theme.select.bgColor};
    box-sizing: border-box;
    border: none;
    width: 120%;
    height: 100%;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

SelectStyled.defaultProps = {
    theme: defaultTheme
};
