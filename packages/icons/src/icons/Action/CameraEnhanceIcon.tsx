import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CameraEnhanceIconSvg from '../../assets/Action/camera_enhance_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraEnhanceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CameraEnhanceIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CameraEnhanceIcon.Style = SvgIcon;
CameraEnhanceIcon.displayName = 'CameraEnhanceIcon';

export default CameraEnhanceIcon
