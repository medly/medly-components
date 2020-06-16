import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HeadsetMicIconSvg from '../../assets/Hardware/headset_mic_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HeadsetMicIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HeadsetMicIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HeadsetMicIcon.Style = SvgIcon;
HeadsetMicIcon.displayName = 'HeadsetMicIcon';

export default HeadsetMicIcon
