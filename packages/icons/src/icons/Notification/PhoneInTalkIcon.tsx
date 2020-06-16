import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhoneInTalkIconSvg from '../../assets/Notification/phone_in_talk_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneInTalkIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhoneInTalkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhoneInTalkIcon.Style = SvgIcon;
PhoneInTalkIcon.displayName = 'PhoneInTalkIcon';

export default PhoneInTalkIcon
