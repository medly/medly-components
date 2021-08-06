import { breakpoints, ThemeContext, useMediaQuery } from '@medly-components/utils';
import React, { useContext } from 'react';
import { HiddenProps } from '../types';

export const HiddenJs: React.FC<HiddenProps> = React.memo(props => {
    const theme = useContext(ThemeContext),
        { up, down, between, only, multiple } = props;

    let mediaQuery = '';

    if (up) mediaQuery = breakpoints(theme.breakpoints).up(up);
    else if (down) mediaQuery = breakpoints(theme.breakpoints).down(down);
    else if (between) mediaQuery = breakpoints(theme.breakpoints).between(between.start, between.end);
    else if (only) mediaQuery = breakpoints(theme.breakpoints).only(only);
    else if (multiple) mediaQuery = breakpoints(theme.breakpoints).multiple(multiple);

    const matches = useMediaQuery(mediaQuery);

    return <>{!mediaQuery || matches ? null : props.children}</>;
});
HiddenJs.displayName = 'HiddenJs';
