import styled from 'styled-components';
import * as CalendarStyled from '../../../../Calendar/Calendar.styled';
import Text from '../../../../Text';

export const Wrapper = styled.div`
    position: relative;
    ${CalendarStyled.CalendarGrid} {
        padding: 0 1.6rem 1.6rem;
    }
`;

export const MonthText = styled(Text)`
    user-select: none;
    display: block;
    width: 100%;
    margin: 1.1rem 0 1.5rem;
`;
