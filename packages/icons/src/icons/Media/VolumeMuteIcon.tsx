import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import VolumeMuteIconSvg from '../../assets/Media/volume_mute_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VolumeMuteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VolumeMuteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VolumeMuteIcon.Style = SvgIcon;
VolumeMuteIcon.displayName = 'VolumeMuteIcon';

export default VolumeMuteIcon
