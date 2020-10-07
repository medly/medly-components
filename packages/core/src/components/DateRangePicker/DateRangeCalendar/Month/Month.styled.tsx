import { styled } from '@medly-components/utils';
import * as CalendarStyled from '../../../Calendar/Calendar.styled';
import Text from '../../../Text';

export const Wrapper = styled.div`
    position: relative;
    padding-top: 2.3rem;
    ${CalendarStyled.CalendarGrid} {
        padding: 1.6rem 3.2rem;
    }
    &:last-child {
        border-left: 1px solid #dfe4e9;
    }
`;

export const MonthText = styled(Text)`
    display: block;
    width: 100%;
`;
