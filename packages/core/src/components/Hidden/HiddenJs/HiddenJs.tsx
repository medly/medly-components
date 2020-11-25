import { breakPoints, ThemeContext, useMediaQuery } from '@medly-components/utils';
import React, { useContext } from 'react';
import { Props } from '../types';

export const HiddenJs: React.FC<Props> = React.memo(props => {
    const theme = useContext(ThemeContext),
        { up, down, between, only, multiple } = props;

    let mediaQuery = '';

    if (up) mediaQuery = breakPoints(theme.breakPoints).up(up);
    else if (down) mediaQuery = breakPoints(theme.breakPoints).down(down);
    else if (between) mediaQuery = breakPoints(theme.breakPoints).between(between.start, between.end);
    else if (only) mediaQuery = breakPoints(theme.breakPoints).only(only);
    else if (multiple) mediaQuery = breakPoints(theme.breakPoints).multiple(multiple);

    const matches = useMediaQuery(mediaQuery);

    return <>{!mediaQuery || matches ? null : props.children}</>;
});
HiddenJs.displayName = 'HiddenJs';
