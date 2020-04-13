import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DevicesOtherIconSvg from '../../assets/Hardware/devices_other_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DevicesOtherIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DevicesOtherIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DevicesOtherIcon.Style = SvgIcon;
DevicesOtherIcon.displayName = 'DevicesOtherIcon';

export default DevicesOtherIcon
