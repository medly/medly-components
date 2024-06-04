import { WithStyle } from '@medly-components/utils';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import Button from '../../Button';
import Popover from '../../Popover';
import Popup from '../../Popover/Popup';
import { TimeOptionList } from '../TimeOptionList';
import type { TIME_OPTION_TYPE } from '../TimeOptionList/types';
import { Colon, TimePickerActions, TimePickerCard, TimePickerWrapper } from './TimePickerPopup.styled';
import type { TimePickerPopupProps } from './types';

export const Component: FC<TimePickerPopupProps> = ({ value, onChange, onReset, popoverDistance, popoverPlacement }) => {
    const hourRef = useRef<HTMLUListElement>(null);
    const minutesRef = useRef<HTMLUListElement>(null);
    const periodRef = useRef<HTMLUListElement>(null);
    const [open, setPopupState] = useContext(Popover.Context);
    const [{ hour, minutes, period }, setValues] = useState({ hour: 0, minutes: 0, period: 0 });

    const handleCancel = () => {
        hourRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        minutesRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        periodRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        onReset();
        setPopupState(false);
    };

    const handleSubmit = () => {
        const hourString = `0${period === 0 ? hour : hour + 12}`.slice(-2);
        const minutesString = `0${minutes}`.slice(-2);
        setTimeout(() => onChange(`${hourString}:${minutesString}`), 10);
        setPopupState(false);
    };

    const handleChange = (type: TIME_OPTION_TYPE, value: number) => {
        setValues(prevState => ({ ...prevState, [type.toLowerCase()]: value }));
    };

    useEffect(() => {
        if (value) {
            const time = value.split(':');
            const hour = Number(time[0]);
            const minutes = Number(time[1]);
            const period = hour < 12 ? 0 : 1;
            const height = (hourRef.current?.scrollHeight || 1) / 16;
            hourRef.current?.scrollTo({ top: (hour % 12) * height, behavior: 'instant' });
            minutesRef.current?.scrollTo({ top: minutes * height, behavior: 'instant' });
            periodRef.current?.scrollTo({ top: period * height, behavior: 'instant' });
        }
    }, [open, value]);

    return (
        <Popup distance={popoverDistance} placement={popoverPlacement}>
            <TimePickerCard>
                <TimePickerWrapper>
                    <TimeOptionList type="HOUR" value={hour} onChange={handleChange} ref={hourRef} />
                    <Colon />
                    <TimeOptionList type="MINUTES" value={minutes} onChange={handleChange} ref={minutesRef} />
                    <TimeOptionList type="PERIOD" value={period} onChange={handleChange} ref={periodRef} />
                </TimePickerWrapper>
                <TimePickerActions>
                    <Button size="S" variant="flat" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button size="S" onClick={handleSubmit}>
                        Apply
                    </Button>
                </TimePickerActions>
            </TimePickerCard>
        </Popup>
    );
};
Component.displayName = 'TimePickerPopup';
Component.defaultProps = {
    popoverPlacement: 'bottom-start'
};
export const TimePickerPopup: FC<TimePickerPopupProps> & WithStyle = Object.assign(Component, { Style: TimePickerCard });
