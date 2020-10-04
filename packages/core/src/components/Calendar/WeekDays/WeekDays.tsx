import React from 'react';
import Text from '../../Text';
import { WEEK_DAYS } from '../constants';

export const WeekDays = React.memo(() => (
    <>
        {WEEK_DAYS.map((label, index) => (
            <Text textAlign="center" textWeight="Strong" key={`${label}_${index}`}>
                {label}
            </Text>
        ))}
    </>
));
WeekDays.displayName = 'WeekDays';
