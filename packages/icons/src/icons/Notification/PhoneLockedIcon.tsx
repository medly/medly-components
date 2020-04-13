import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhoneLockedIconSvg from '../../assets/Notification/phone_locked_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneLockedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhoneLockedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhoneLockedIcon.Style = SvgIcon;
PhoneLockedIcon.displayName = 'PhoneLockedIcon';

export default PhoneLockedIcon
