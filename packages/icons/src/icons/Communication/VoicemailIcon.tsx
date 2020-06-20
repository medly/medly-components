import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import VoicemailIconSvg from '../../assets/Communication/voicemail_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VoicemailIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VoicemailIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VoicemailIcon.Style = SvgIcon;
VoicemailIcon.displayName = 'VoicemailIcon';

export default VoicemailIcon
