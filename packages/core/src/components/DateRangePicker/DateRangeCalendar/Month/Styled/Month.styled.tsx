import { styled } from '@medly-components/utils';
import * as CalendarStyled from '../../../../Calendar/Calendar.styled';
import Text from '../../../../Text';

export const Wrapper = styled.div`
    position: relative;
    ${CalendarStyled.CalendarGrid} {
        padding: 0 2rem 2rem;
    }
`;

export const MonthText = styled(Text)`
    user-select: none;
    display: block;
    width: 100%;
    margin: 2.7rem 0 1.5rem;
`;
