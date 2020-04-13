import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhonelinkLockIconSvg from '../../assets/Communication/phonelink_lock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkLockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhonelinkLockIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhonelinkLockIcon.Style = SvgIcon;
PhonelinkLockIcon.displayName = 'PhonelinkLockIcon';

export default PhonelinkLockIcon
