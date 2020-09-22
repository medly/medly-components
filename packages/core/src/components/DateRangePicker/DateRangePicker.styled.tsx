import { centerAligned, css, InjectClassName, styled, WithThemeProp } from '@medly-components/utils';
import * as CalendarStyled from '../Calendar/Calendar.styled';
import TextField from '../TextField';
import * as TextFieldStyled from '../TextField/Styled';
import { StyleProps } from './types';

export const MainWrapperComponent = styled.div`
    position: relative;
`;

export const Wrapper = styled.div`
    cursor: pointer;
    border: 1px solid #98a7b7;
    border-radius: 4px;
    overflow: hidden;
`;

export const InputWrapperContainer = styled.div`
    display: flex;
    ${centerAligned('flex')}
    flex-direction: row;
`;

export const InputSeparator = styled.i`
    border-right: 1px solid #c7d0d8;
    height: 45%;
    width: 1px;
`;

export const OuterWrapper = styled(TextFieldStyled.OuterWrapper)`
    min-width: 338px;
`;

export const InnerWrapper = styled(TextFieldStyled.InnerWrapper)`
    padding: 0;
    ${TextField.Style} {
        ${TextFieldStyled.InnerWrapper} {
            background-color: transparent;
        }
    }
    ${TextFieldStyled.InputWrapper} {
        ${TextFieldStyled.Input} {
            padding: 0 16px 8px 16px;
            &:not(:placeholder-shown) + ${TextFieldStyled.Label}, &:focus + ${TextFieldStyled.Label} {
                padding-left: 22px;
            }
        }
        ${TextFieldStyled.Label} {
            padding-left: 16px;
        }
    }
`;

export const CalendarWrapper = styled.div<{ size: 'S' | 'M' }>`
    display: flex;
    position: absolute;
    z-index: 1;
    left: 0;
    top: ${props => (props.size === 'S' ? 50 : 65)}px;
    background: ${({ theme }) => theme.calendar.bgColor};
    box-shadow: 0 0.2rem 0.8rem ${({ theme }) => theme.calendar.shadowColor};
    border-radius: ${({ theme }) => theme.calendar.borderRadius};
    width: max-content;
    height: max-content;
`;

export const DateRangeNavContainer = styled.div`
    padding: 16px;
    ${CalendarStyled.Calendar} {
        box-shadow: none;
        background-color: transparent;
        border-radius: 0;
        padding: 0;
    }
    &:last-child {
        border-left: 1px solid #dfe4e9;
    }
`;

export const DateRangeNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 8px;
    box-sizing: border-box;
    height: 40px;
    overflow: hidden;
`;

export const DateRangeNavText = styled.span`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #13181d;
    flex: 1;
`;

type State = 'default' | 'active' | 'error' | 'disabled';
const getStyleForIcon = ({ theme, variant, disabled }: StyleProps & WithThemeProp, state: State) => {
    const {
        icon: { [state]: iconStyle }
    } = theme.datePicker[variant];
    return css`
        * {
            fill: ${iconStyle.color};
        }
        &:hover {
            background-color: ${!disabled && iconStyle.backgroundColor};
            * {
                fill: ${!disabled && iconStyle.hoverColor};
            }
        }
    `;
};

export const DateIcon = styled(InjectClassName)<StyleProps>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    border-radius: ${({ theme }) => theme.datePicker.borderRadius};
    padding: 0;
    margin-left: 16px;
    ${props => getStyleForIcon(props, 'default')};
    ${props => props.isActive && getStyleForIcon(props, 'active')};
    ${props => props.isErrorPresent && getStyleForIcon(props, 'error')};
    ${props => props.disabled && getStyleForIcon(props, 'disabled')};
    &:hover {
        background-color: transparent;
    }
`;
