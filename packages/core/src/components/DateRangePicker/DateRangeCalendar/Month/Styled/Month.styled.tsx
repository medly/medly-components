import { styled } from '@medly-components/utils';
import * as CalendarStyled from '../../../../Calendar/Calendar.styled';
import Text from '../../../../Text';

export const Wrapper = styled.div`
    position: relative;
    padding-top: 3.2rem;
    ${CalendarStyled.CalendarGrid} {
        padding: 1.6rem 3.2rem 3.2rem;
    }
`;

export const MonthText = styled(Text)`
    user-select: none;
    display: block;
    width: 100%;
`;
