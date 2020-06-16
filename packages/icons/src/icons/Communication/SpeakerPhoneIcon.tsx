import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SpeakerPhoneIconSvg from '../../assets/Communication/speaker_phone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpeakerPhoneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SpeakerPhoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SpeakerPhoneIcon.Style = SvgIcon;
SpeakerPhoneIcon.displayName = 'SpeakerPhoneIcon';

export default SpeakerPhoneIcon
