import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhoneCallbackIconSvg from '../../assets/Notification/phone_callback_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneCallbackIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhoneCallbackIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhoneCallbackIcon.Style = SvgIcon;
PhoneCallbackIcon.displayName = 'PhoneCallbackIcon';

export default PhoneCallbackIcon
