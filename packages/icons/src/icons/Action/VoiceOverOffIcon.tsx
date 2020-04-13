import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VoiceOverOffIconSvg from '../../assets/Action/voice_over_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VoiceOverOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VoiceOverOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VoiceOverOffIcon.Style = SvgIcon;
VoiceOverOffIcon.displayName = 'VoiceOverOffIcon';

export default VoiceOverOffIcon
