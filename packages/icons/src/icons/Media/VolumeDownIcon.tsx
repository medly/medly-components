import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import VolumeDownIconSvg from '../../assets/Media/volume_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VolumeDownIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VolumeDownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VolumeDownIcon.Style = SvgIcon;
VolumeDownIcon.displayName = 'VolumeDownIcon';

export default VolumeDownIcon
