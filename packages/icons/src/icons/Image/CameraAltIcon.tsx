import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CameraAltIconSvg from '../../assets/Image/camera_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraAltIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CameraAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CameraAltIcon.Style = SvgIcon;
CameraAltIcon.displayName = 'CameraAltIcon';

export default CameraAltIcon
