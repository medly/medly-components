import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MobileScreenShareIconSvg from '../../assets/Communication/mobile_screen_share_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MobileScreenShareIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MobileScreenShareIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MobileScreenShareIcon.Style = SvgIcon;
MobileScreenShareIcon.displayName = 'MobileScreenShareIcon';

export default MobileScreenShareIcon
