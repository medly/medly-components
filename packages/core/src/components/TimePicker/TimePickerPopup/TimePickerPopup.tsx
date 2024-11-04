import { WithStyle } from '@medly-components/utils';
import { FC, useContext, useEffect, useMemo, useRef, useState } from 'react';
import Button from '../../Button';
import Popover from '../../Popover';
import Popup from '../../Popover/Popup';
import { TimeOptionList } from '../TimeOptionList';
import type { TIME_OPTION_TYPE } from '../TimeOptionList/types';
import { TimePickerActions, TimePickerCard, TimePickerWrapper } from './TimePickerPopup.styled';
import type { TimePickerPopupProps } from './types';

export const Component: FC<TimePickerPopupProps> = ({
    value,
    onChange,
    onReset,
    popoverDistance,
    popoverPlacement,
    disableFutureTime,
    disablePastTime,
    showCurrentTimeAsDefault
}) => {
    const now = new Date();
    const hourRef = useRef<HTMLUListElement>(null);
    const minutesRef = useRef<HTMLUListElement>(null);
    const periodRef = useRef<HTMLUListElement>(null);
    const [open, setPopupState] = useContext(Popover.Context);
    const defaultTime = showCurrentTimeAsDefault
        ? { hour: now.getHours(), minutes: now.getMinutes(), period: now.getHours() < 12 ? 0 : 1 }
        : { hour: 10, minutes: 0, period: 0 };
    const [{ hour, minutes, period }, setValues] = useState(defaultTime);
    const isFutureTime = useMemo(() => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();
        const selectedHour = period === 0 ? hour : hour + 12;
        const isFutureHour = currentHour < (period === 0 ? hour : hour + 12);
        const isFutureMinutes = currentMinutes < minutes;
        return isFutureHour || (selectedHour === currentHour && isFutureMinutes);
    }, [hour, minutes, period]);
    const isPastTime = useMemo(() => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();
        const selectedHour = period === 0 ? hour : hour + 12;
        const isPastHour = currentHour > (period === 0 ? hour : hour + 12);
        const isPastMinutes = currentMinutes > minutes;
        return isPastHour || (selectedHour === currentHour && isPastMinutes);
    }, [hour, minutes, period]);

    const handleCancel = () => {
        hourRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        minutesRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        periodRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        onReset();
        setPopupState(false);
    };

    const handleSubmit = () => {
        const adjustedHour = hour === 12 ? 0 : hour;
        const hourString = `0${period === 0 ? adjustedHour : adjustedHour + 12}`.slice(-2);
        const minutesString = `0${minutes}`.slice(-2);
        setTimeout(() => onChange(`${hourString}:${minutesString}`), 10);
        setPopupState(false);
    };

    const handleChange = (type: TIME_OPTION_TYPE, value: number) => {
        setValues(prevState => ({ ...prevState, [type.toLowerCase()]: value }));
    };

    useEffect(() => {
        let { hour, minutes, period } = defaultTime;
        if (value) {
            const time = value.split(':');
            hour = Number(time[0]);
            minutes = Number(time[1]);
            period = hour < 12 ? 0 : 1;
            setValues({ hour, minutes, period });
        }
        const height = (hourRef.current?.scrollHeight || 1) / 16;
        const hourScroll = hour % 12 === 0 ? 11 : (hour % 12) - 1;

        // @ts-ignore
        hourRef.current?.scrollTo({ top: hourScroll * height, behavior: 'instant' });
        // @ts-ignore
        minutesRef.current?.scrollTo({ top: minutes * height, behavior: 'instant' });
        // @ts-ignore
        periodRef.current?.scrollTo({ top: period * height, behavior: 'instant' });
    }, [open, value]);

    return (
        <Popup distance={popoverDistance} placement={popoverPlacement}>
            <TimePickerCard>
                <TimePickerWrapper>
                    <TimeOptionList type="HOUR" value={hour} onChange={handleChange} ref={hourRef} />
                    <TimeOptionList type="MINUTES" value={minutes} onChange={handleChange} ref={minutesRef} />
                    <TimeOptionList type="PERIOD" value={period} onChange={handleChange} ref={periodRef} />
                </TimePickerWrapper>
                <TimePickerActions>
                    <Button size="S" variant="flat" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        size="S"
                        onClick={handleSubmit}
                        disabled={(disableFutureTime && isFutureTime) || (disablePastTime && isPastTime)}
                    >
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
