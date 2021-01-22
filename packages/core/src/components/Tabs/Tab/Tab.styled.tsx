import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import Text from '../../Text';
import { TabSize } from '../types';
import { StyledProps } from './types';

export const Count = styled.span<{ tabSize: TabSize }>`
    color: ${({ theme }) => theme.tabs.countColor};
    border-radius: ${({ theme }) => theme.tabs.tabCountBorderRadius};
    margin-left: 0.8rem;
    line-height: 1.2rem;
    padding: ${({ tabSize }) => (tabSize === 'S' ? '0.2rem 0.5rem' : '0.4rem 0.8rem')};
    font-size: ${({ tabSize }) => (tabSize === 'S' ? '1.1rem' : '1.2rem')};
`;

export const Label = styled(Text)``;

export const HelperText = styled(Text)`
    text-align: left;
    color: ${({ theme }) => theme.colors.grey[600]};
`;

const getStyle = ({
    styleType,
    labelColor,
    iconBgColor,
    iconColor,
    bgColor,
    tabSize,
    countBgColor,
    helperTextColor
}: StyledProps & { styleType: 'active' | 'default' | 'hovered' | 'disabled' }) => css`
    background-color: ${bgColor[styleType]};
    ${Label} {
        color: ${labelColor[styleType]};
    }
    ${HelperText} {
        color: ${helperTextColor[styleType]};
    }
    ${Count} {
        background-color: ${countBgColor[styleType]};
    }
    ${SvgIcon} {
        font-size: ${tabSize === 'M' ? '2.0rem' : '2.4rem'};
        padding: ${tabSize === 'M' ? '0.6rem' : tabSize === 'L' ? '0.8rem' : '0'};
        background-color: ${tabSize === 'S' ? 'transparent' : iconBgColor[styleType]};
        * {
            fill: ${iconColor[styleType]};
        }
    }
`;

const activeStyle = ({ tabStyle, tabBackground, iconColor, theme, bgColor, tabSize }: StyledProps) => css<StyledProps>`
    ${props => getStyle({ ...props, styleType: 'active' })}
    background-color: ${tabStyle === 'CLOSED' && tabBackground === 'WHITE' ? bgColor.active : bgColor.default};
    ${SvgIcon} {
        * {
            fill: ${tabSize === 'S' ? iconColor.active : theme.colors.white};
        }
    }
`;

const nonActiveStyle = ({ tabBackground, bgColor }: StyledProps) => css<StyledProps>`
    ${props => getStyle({ ...props, styleType: 'default' })}
    &:not(:disabled):hover {
        ${props => getStyle({ ...props, styleType: 'hovered' })}
        background-color: ${tabBackground === 'GREY' ? bgColor.default : bgColor.hovered};
    }
`;

const disabledStyle = css<StyledProps>`
    ${props => getStyle({ ...props, styleType: 'disabled' })}
`;

export const TabWrapper = styled('button').attrs(({ theme }) => ({ ...theme.tabs }))<StyledProps>`
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
    flex: ${({ fraction }) => fraction};
    border-color: ${({ borderColor, tabStyle }) => borderColor[tabStyle === 'CLOSED' ? 'closed' : 'open']};
    border-width: ${({ tabStyle }) => (tabStyle === 'CLOSED' ? `0.1rem 0.1rem 0.1rem 0` : `0 0 0.1rem 0`)};
    transition: all 100ms ease-out;
    * {
        transition: all 100ms ease-out;
    }

    &:first-child {
        border-left-width: ${({ tabStyle }) => tabStyle === 'CLOSED' && `0.1rem`};
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
        left: ${({ tabStyle }) => (tabStyle === 'CLOSED' ? '-0.1rem' : '0')};
        width: ${({ tabStyle }) => (tabStyle === 'CLOSED' ? 'calc(100% + 0.2rem)' : '100%')};
        background-color: ${({ borderColor, active }) => (active ? borderColor.active : 'transparent')};
        border-radius: ${({ tabStyle }) => tabStyle === 'OPEN' && '0.5rem 0.5rem 0 0'};
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
            background-color: ${({ borderColor, active, tabBackground }) => !active && tabBackground === 'GREY' && borderColor.hovered};
        }
    }

    ${SvgIcon} {
        margin-right: 1.6rem;
    }

    ${({ active }) => (active ? activeStyle : nonActiveStyle)}
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
