import { centerAligned, styled } from '@medly-components/utils';
import * as CalendarStyled from '../Calendar/Calendar.styled';
import * as DatePickerStyled from '../DatePicker/DatePicker.styled';
import TextField from '../TextField';
import * as TextFieldStyled from '../TextField/Styled';

type MainWrapperComponentProps = {
    fullWidth?: boolean;
    minWidth?: number;
};

export const MainWrapperComponent = styled.div<MainWrapperComponentProps>`
    position: relative;
    width: ${props => (props.fullWidth ? '100%' : 'auto')};
    min-width: ${props => (props.minWidth && props.minWidth > 338 ? props.minWidth : '338px')}px;
    display: inline-block;
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

export const DateIcon = styled(DatePickerStyled.DateIcon)`
    padding: 0;
    margin-left: 16px;
    &:hover {
        background-color: transparent;
    }
`;
