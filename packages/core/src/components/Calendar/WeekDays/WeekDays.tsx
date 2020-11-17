import React from 'react';
import { WEEK_DAYS } from '../constants';
import { WeekDay } from './WeekDays.styled';

export const WeekDays = React.memo(() => (
    <>
        {WEEK_DAYS.map((label, index) => (
            <WeekDay textWeight="Strong" key={`${label}_${index}`}>
                {label}
            </WeekDay>
        ))}
    </>
));
WeekDays.displayName = 'WeekDays';
