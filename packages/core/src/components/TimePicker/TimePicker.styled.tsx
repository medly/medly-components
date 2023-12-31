import { AccessTimeIcon } from '@medly-components/icons';
import styled from 'styled-components';
import Popover from '../Popover';
import { OuterWrapper } from '../TextField/Styled';

export const TimePickerWrapper = styled(Popover)<{ fullWidth?: boolean; minWidth?: string; maxWidth?: string }>`
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'min-content')};
    min-width: ${({ minWidth }) => minWidth};
    max-width: ${({ maxWidth }) => maxWidth};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};

    & > ${OuterWrapper} {
        margin: 0;
    }

    input[type='time']::-webkit-calendar-picker-indicator {
        background: none;
        display: none;
    }
`;

export const TimeIcon = styled(AccessTimeIcon).attrs({ title: 'time-icon' })`
    cursor: pointer;
`;
