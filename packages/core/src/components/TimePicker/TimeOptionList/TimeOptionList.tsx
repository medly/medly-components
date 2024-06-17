import type { FC } from 'react';
import { forwardRef } from 'react';
import { TimeItem, TimePicker, TimeUList } from './TimeOptionList.styled';
import type { TimeOptionListProps } from './types';

const TIME_OPTIONS_LENGTH = {
    HOUR: 12,
    MINUTES: 60,
    PERIOD: 2
};
const PERIOD = ['AM', 'PM'];

export const TimeOptionList: FC<TimeOptionListProps> = forwardRef<HTMLUListElement, TimeOptionListProps>(
    ({ value, onChange, type }, ref) => {
        const isPeriod = type === 'PERIOD';
        const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
            const height = e.currentTarget.scrollHeight / (TIME_OPTIONS_LENGTH[type] + 4);
            const value = Math.floor((e.currentTarget.scrollTop || 0) / height);
            onChange(type, value);
        };

        const handleClick = (index: number) => () => (ref as any)?.current?.scrollTo({ top: index * 40, behavior: 'smooth' });

        return (
            <TimePicker>
                <TimeUList ref={ref} onScroll={handleScroll} aria-label={`${type} list`}>
                    <TimeItem key="-2" />
                    <TimeItem key="-1" />
                    {Array.from({ length: TIME_OPTIONS_LENGTH[type] }, (_, index) => (
                        <TimeItem
                            key={index}
                            isSelected={index === value}
                            onClick={handleClick(index)}
                            aria-label={isPeriod ? PERIOD[index] : `${index} ${type}`}
                        >
                            {isPeriod ? PERIOD[index] : `0${index}`.slice(-2)}
                        </TimeItem>
                    ))}
                    <TimeItem key="+1" />
                    <TimeItem key="+2" />
                </TimeUList>
            </TimePicker>
        );
    }
);
TimeOptionList.displayName = 'TimeOptionList';
