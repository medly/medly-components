import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import * as CalendarStyled from '../Calendar/Calendar.styled';
import * as TextFieldStyled from '../TextField/Styled';

export const InnerWrapper = styled(TextFieldStyled.InnerWrapper)`
    padding-left: 0.8rem;
    ${SvgIcon} {
        margin-right: 0.8rem;
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
