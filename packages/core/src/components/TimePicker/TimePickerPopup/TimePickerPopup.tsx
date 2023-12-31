import { ExpandLessIcon, ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import { FC, RefObject, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import Button from '../../Button';
import Popover from '../../Popover';
import Popup from '../../Popover/Popup';
import Text from '../../Text';
import {
    Colon,
    PeriodListItem,
    PeriodPicker,
    PeriodUList,
    TimeLabels,
    TimePicker,
    TimePickerActions,
    TimePickerCard,
    TimePickerWrapper,
    TimeUList
} from './TimePickerPopup.styled';
import { Period, TimePickerPopupProps } from './types';

const PERIOD: Period[] = ['AM', 'PM'];

export const Component: FC<TimePickerPopupProps> = ({ value, onChange, popoverDistance, popoverPlacement }) => {
    const hourRef = useRef<HTMLUListElement>(null);
    const minutesRef = useRef<HTMLUListElement>(null);
    const periodRef = useRef<HTMLUListElement>(null);
    const theme = useContext(ThemeContext);
    const [open, setPopupState] = useContext(Popover.Context);
    const [selectedPeriod, setSelectedPeriod] = useState<Period>('AM');

    const scrollTime = (ref: RefObject<HTMLUListElement>, direction: 'UP' | 'DOWN') =>
        ref.current?.scrollTo({
            top: ref.current.scrollTop + (direction === 'UP' ? -ref.current.clientHeight : ref.current.clientHeight),
            behavior: 'smooth'
        });

    const scrollPeriod = (period: Period) => {
        if (periodRef.current) {
            periodRef.current.style.transform =
                period === 'AM' ? 'translateY(0)' : `translateY(calc(-${theme.timePicker.nonSelectedOption.lineHeight} - 2.4rem))`;
        }
    };

    const handleCancel = () => {
        hourRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        minutesRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedPeriod('AM');
        setPopupState(false);
    };

    const handleSubmit = () => {
        const hour = Math.round((hourRef.current?.scrollTop || 0) / (hourRef.current?.clientHeight || 1));
        const minutes = Math.round((minutesRef.current?.scrollTop || 0) / (minutesRef.current?.clientHeight || 1));
        const hourString = `0${selectedPeriod === 'AM' ? hour : hour + 12}`.slice(-2);
        const minutesString = `0${minutes}`.slice(-2);
        onChange(`${hourString}:${minutesString}`);
        setPopupState(false);
    };

    useEffect(() => {
        if (value) {
            const time = value.split(':');
            const hour = Number(time[0]);
            const minutes = Number(time[1]);
            const period = hour < 12 ? 'AM' : 'PM';
            hourRef.current?.scrollTo({ top: (hour % 12) * hourRef.current.clientHeight, behavior: 'smooth' });
            minutesRef.current?.scrollTo({ top: minutes * minutesRef.current.clientHeight, behavior: 'smooth' });
            setSelectedPeriod(period);
            scrollPeriod(period);
        }
    }, [open, value]);

    useEffect(() => {
        scrollPeriod(selectedPeriod);
    }, [selectedPeriod]);

    return (
        <Popup distance={popoverDistance} placement={popoverPlacement}>
            <TimePickerCard>
                <TimeLabels>
                    <Text>Hour</Text>
                    <span />
                    <Text>Minutes</Text>
                    <span />
                </TimeLabels>
                <TimePickerWrapper>
                    <TimePicker>
                        <ExpandLessIcon title="hour-arrow-up" onClick={() => scrollTime(hourRef, 'UP')} />
                        <TimeUList ref={hourRef}>
                            {Array.from({ length: 12 }, (_, index) => (
                                <li key={index}>{`0${index}`.slice(-2)}</li>
                            ))}
                        </TimeUList>
                        <ExpandMoreIcon title="hour-arrow-down" onClick={() => scrollTime(hourRef, 'DOWN')} />
                    </TimePicker>
                    <Colon />
                    <TimePicker>
                        <ExpandLessIcon title="minutes-arrow-up" onClick={() => scrollTime(minutesRef, 'UP')} />
                        <TimeUList ref={minutesRef}>
                            {Array.from({ length: 60 }, (_, index) => (
                                <li key={index}>{`0${index}`.slice(-2)}</li>
                            ))}
                        </TimeUList>
                        <ExpandMoreIcon title="minutes-arrow-down" onClick={() => scrollTime(minutesRef, 'DOWN')} />
                    </TimePicker>
                    <PeriodPicker>
                        <PeriodUList ref={periodRef}>
                            {PERIOD.map(period => (
                                <PeriodListItem
                                    key={period}
                                    isSelected={selectedPeriod === period}
                                    onClick={() => setSelectedPeriod(period)}
                                >
                                    {period}
                                </PeriodListItem>
                            ))}
                        </PeriodUList>
                    </PeriodPicker>
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
