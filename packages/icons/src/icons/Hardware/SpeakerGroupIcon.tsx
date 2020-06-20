import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SpeakerGroupIconSvg from '../../assets/Hardware/speaker_group_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpeakerGroupIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SpeakerGroupIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SpeakerGroupIcon.Style = SvgIcon;
SpeakerGroupIcon.displayName = 'SpeakerGroupIcon';

export default SpeakerGroupIcon
