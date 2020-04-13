import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TapAndPlayIconSvg from '../../assets/Notification/tap_and_play_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TapAndPlayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TapAndPlayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TapAndPlayIcon.Style = SvgIcon;
TapAndPlayIcon.displayName = 'TapAndPlayIcon';

export default TapAndPlayIcon
