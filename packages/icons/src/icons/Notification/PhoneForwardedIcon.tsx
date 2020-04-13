import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhoneForwardedIconSvg from '../../assets/Notification/phone_forwarded_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneForwardedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhoneForwardedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhoneForwardedIcon.Style = SvgIcon;
PhoneForwardedIcon.displayName = 'PhoneForwardedIcon';

export default PhoneForwardedIcon
