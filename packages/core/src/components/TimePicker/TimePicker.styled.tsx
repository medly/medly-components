import { AccessTimeIcon } from '@medly-components/icons';
import { InjectClassName } from '@medly-components/utils';
import styled from 'styled-components';

export const TimePickerWrapper = styled(InjectClassName)`
    input[type='time']::-webkit-calendar-picker-indicator {
        background: none;
        display: none;
    }
`;

export const TimeIcon = styled(AccessTimeIcon).attrs({ title: 'time-icon' })`
    cursor: pointer;
`;
