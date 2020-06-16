import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StopScreenShareIconSvg from '../../assets/Communication/stop_screen_share_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StopScreenShareIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StopScreenShareIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StopScreenShareIcon.Style = SvgIcon;
StopScreenShareIcon.displayName = 'StopScreenShareIcon';

export default StopScreenShareIcon
