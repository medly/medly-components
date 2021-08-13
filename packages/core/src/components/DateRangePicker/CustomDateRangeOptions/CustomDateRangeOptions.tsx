import React from 'react';
import { SelectOptions } from './CustomDateRangeOptions.styled';
import { Props } from './types';

export const CustomDateRangeOptions: React.FC<Props> = React.memo(props => {
    return <SelectOptions {...props} />;
});
CustomDateRangeOptions.displayName = 'CustomDateRangeOptions';
