import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CameraIconSvg from '../../assets/Image/camera_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CameraIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CameraIcon.Style = SvgIcon;
CameraIcon.displayName = 'CameraIcon';

export default CameraIcon
