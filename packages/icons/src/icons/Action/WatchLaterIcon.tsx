import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WatchLaterIconSvg from '../../assets/Action/watch_later_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WatchLaterIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WatchLaterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WatchLaterIcon.Style = SvgIcon;
WatchLaterIcon.displayName = 'WatchLaterIcon';

export default WatchLaterIcon
