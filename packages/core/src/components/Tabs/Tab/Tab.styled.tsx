import { SvgIcon } from '@medly-components/icons';
import type { WithThemeProp } from '@medly-components/utils';
import { breakpoints, centerAligned, getFontStyle, media } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import Text from '../../Text';
import { TabSize } from '../types';
import { StyledTabProps } from './types';

export const Count = styled.span<{ tabSize: TabSize }>`
    color: ${({ theme }) => theme.tabs.countColor};
    border-radius: ${({ theme }) => theme.tabs.countBorderRadius};
    margin-left: 0.8rem;
    line-height: 1.2rem;
    padding: ${({ tabSize }) => (tabSize === 'S' ? '0.2rem 0.5rem' : '0.4rem 0.8rem')};
    font-size: ${({ tabSize }) => (tabSize === 'S' ? '1.1rem' : '1.2rem')};
`;

export const Label = styled(Text)<{ tabSize: TabSize }>`
    ${({ theme, tabSize }) => getFontStyle({ theme, fontVariant: theme.tabs.label.fontVariant[tabSize], fontWeight: 'Medium' })}
`;

export const DisabledLabel = styled(Text)<{ tabSize: TabSize }>`
    ${({ theme, tabSize }) =>
        getFontStyle({ theme, fontVariant: theme.tabs.solid.disabledLabel.fontVariant[tabSize], fontWeight: 'Medium' })}
    color: ${({ theme }) => theme.tabs.labelColor.disabled};
    text-align: center;
`;

export const HelperText = styled(Text)`
    text-align: left;
    color: ${({ theme }) => theme.colors.grey[600]};
`;

const getStyle = ({
    styleType,
    theme,
    tabSize,
    variant
}: StyledTabProps & WithThemeProp & { styleType: 'active' | 'default' | 'hovered' | 'disabled' }) => css`
    background-color: ${theme.tabs.bgColor[styleType]};
    ${Label} {
        color: ${theme.tabs.labelColor[styleType]};
        line-height: ${variant === 'solid' && styleType === 'disabled' && '1.6rem'};
    }
    ${HelperText} {
        color: ${theme.tabs.helperTextColor[styleType]};
        text-align: ${variant === 'solid' && 'center'};
    }
    ${Count} {
        background-color: ${theme.tabs.countBgColor[styleType]};
    }
    ${SvgIcon} {
        font-size: ${tabSize === 'M' ? '2.0rem' : '2.4rem'};
        padding: ${tabSize === 'M' ? '0.6rem' : tabSize === 'L' ? '0.8rem' : '0'};
        background-color: ${tabSize === 'S' ? 'transparent' : theme.tabs.iconBgColor[styleType]};
        * {
            fill: ${theme.tabs.iconColor[styleType]};
        }
    }
`;

const activeStyle = ({ variant, tabBackground, theme, tabSize }: StyledTabProps & WithThemeProp) => css<StyledTabProps>`
    ${props => getStyle({ ...props, styleType: 'active' })}
    background-color: ${variant === 'outlined' && tabBackground === 'WHITE' ? theme.tabs.bgColor.active : theme.tabs.bgColor.default};
    ${SvgIcon} {
        * {
            fill: ${tabSize === 'S' ? theme.tabs.iconColor.active : theme.colors.white};
        }
    }
`;

const nonActiveStyle = ({ tabBackground, theme }: StyledTabProps & WithThemeProp) => css<StyledTabProps>`
    ${props => getStyle({ ...props, styleType: 'default' })}
    &:not(:disabled):hover {
        ${props => getStyle({ ...props, styleType: 'hovered' })}
        background-color: ${tabBackground === 'GREY' ? theme.tabs.bgColor.default : theme.tabs.bgColor.hovered};
    }
`;

const disabledStyle = css<StyledTabProps>`
    ${props => getStyle({ ...props, styleType: 'disabled' })}
`;

const getSolidTabWidth = ({ totalTabs, theme, tabSize }: StyledTabProps & WithThemeProp) => {
    const paddingBetweenTabs = `calc(${totalTabs - 1} * ${theme.tabs.solid.tabList.padding[tabSize]} / ${totalTabs})`;
    return `calc(${100 / totalTabs}% - ${paddingBetweenTabs})`;
};

const solidStyle = css<StyledTabProps>`
    ${centerAligned('flex')}
    width: ${getSolidTabWidth};
    border: none;
    background-color: transparent;
    padding: 0.8rem 0;
    border-radius: ${({ theme }) => theme.tabs.solid.tabBorderRadius};
`;

const flatOutlinedStyle = css<StyledTabProps>`
    &:first-child {
        border-left-width: ${({ variant }) => variant === 'outlined' && `0.1rem`};
        border-top-left-radius: 0.8rem;
    }

    &:last-child {
        border-top-right-radius: 0.8rem;
    }

    &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.4rem;
        bottom: -0.1rem;
        left: ${({ variant }) => (variant === 'outlined' ? '-0.1rem' : '0')};
        width: ${({ variant }) => (variant === 'outlined' ? 'calc(100% + 0.2rem)' : '100%')};
        background-color: ${({ active, theme }) => (active ? theme.tabs.borderColor.active : 'transparent')};
        border-radius: ${({ variant }) => variant === 'flat' && '0.5rem 0.5rem 0 0'};
    }

    ${({ theme, fraction }) => media(breakpoints(theme.breakpoints).down('S'))`
        flex: ${fraction || 1}
    `}
`;

const flatBackgroundStyle = css`
    background-color: transparent;

    &:disabled {
        background-color: transparent;
    }
`;

export const TabWrapper = styled('button')<StyledTabProps>`
    padding: 1.6rem;
    user-select: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row wrap;
    position: relative;
    border-style: solid;
    box-sizing: border-box;
    font-family: inherit;
    flex: ${({ fraction, fullWidth, variant }) => variant !== 'solid' && (fraction || (fullWidth ? '1' : 'initial'))};
    border-color: ${({ theme, variant }) => (variant === 'flat' || variant === 'outlined') && theme.tabs.borderColor[variant]};
    border-width: ${({ variant }) => (variant === 'outlined' ? `0.1rem 0.1rem 0.1rem 0` : `0 0 0.1rem 0`)};
    transition: all 100ms ease-out;
    * {
        transition: all 100ms ease-out;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
        &::after {
            background-color: transparent;
        }
        ${disabledStyle}
    }

    &:not(:disabled):hover {
        cursor: pointer;
        &::after {
            background-color: ${({ theme, active, tabBackground }) =>
                !active && tabBackground === 'GREY' && theme.tabs.borderColor.hovered};
        }
    }

    ${SvgIcon} {
        margin-right: 1.6rem;
    }

    ${({ active }) => (active ? activeStyle : nonActiveStyle)}
    ${({ variant }) => variant === 'solid' && solidStyle};
    ${({ variant }) => (variant === 'flat' || variant === 'outlined') && flatOutlinedStyle};
    ${({ variant }) => variant === 'flat' && flatBackgroundStyle};
`;

export const LabelAndDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
