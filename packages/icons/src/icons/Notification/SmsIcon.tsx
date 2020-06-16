import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SmsIconSvg from '../../assets/Notification/sms_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SmsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SmsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SmsIcon.Style = SvgIcon;
SmsIcon.displayName = 'SmsIcon';

export default SmsIcon
