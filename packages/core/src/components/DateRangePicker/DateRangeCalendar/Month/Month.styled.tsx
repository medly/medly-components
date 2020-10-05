import { css, styled } from '@medly-components/utils';
import * as CalendarStyled from '../../../Calendar/Calendar.styled';
import Text from '../../../Text';

const hideDateStyle = css`
        opacity: 0;
        cursor: default;
        pointer-events: none;
    `,
    dateBetweenRangeStyle = css`
        background-color: ${({ theme }) => theme.colors.blue[100]};
        border-radius: 0;
        margin: 0.4rem 0;
    `;

export const Date = styled(CalendarStyled.Date)<{ isInDateRange?: boolean }>`
    ${({ isInActiveMonth }) => !isInActiveMonth && hideDateStyle};
    ${({ isInDateRange }) => isInDateRange && dateBetweenRangeStyle};
`;

export const Wrapper = styled.div`
    position: relative;
    padding-top: 2.3rem;
    ${CalendarStyled.CalendarGrid} {
        padding: 1.6rem;
    }
    &:last-child {
        border-left: 1px solid #dfe4e9;
    }
`;

export const MonthText = styled(Text)`
    display: block;
    width: 100%;
`;
