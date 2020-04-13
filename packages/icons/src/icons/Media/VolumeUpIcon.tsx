import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VolumeUpIconSvg from '../../assets/Media/volume_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VolumeUpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VolumeUpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VolumeUpIcon.Style = SvgIcon;
VolumeUpIcon.displayName = 'VolumeUpIcon';

export default VolumeUpIcon
