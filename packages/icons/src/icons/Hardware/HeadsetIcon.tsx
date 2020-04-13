import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HeadsetIconSvg from '../../assets/Hardware/headset_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HeadsetIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HeadsetIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HeadsetIcon.Style = SvgIcon;
HeadsetIcon.displayName = 'HeadsetIcon';

export default HeadsetIcon
