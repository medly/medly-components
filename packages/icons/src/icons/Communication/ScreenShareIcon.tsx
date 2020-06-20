import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ScreenShareIconSvg from '../../assets/Communication/screen_share_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScreenShareIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScreenShareIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ScreenShareIcon.Style = SvgIcon;
ScreenShareIcon.displayName = 'ScreenShareIcon';

export default ScreenShareIcon
