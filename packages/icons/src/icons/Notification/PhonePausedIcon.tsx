import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhonePausedIconSvg from '../../assets/Notification/phone_paused_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonePausedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhonePausedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhonePausedIcon.Style = SvgIcon;
PhonePausedIcon.displayName = 'PhonePausedIcon';

export default PhonePausedIcon
