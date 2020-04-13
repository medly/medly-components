import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermCameraMicIconSvg from '../../assets/Action/perm_camera_mic_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermCameraMicIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PermCameraMicIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PermCameraMicIcon.Style = SvgIcon;
PermCameraMicIcon.displayName = 'PermCameraMicIcon';

export default PermCameraMicIcon
