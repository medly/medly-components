import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TabletIconSvg from '../../assets/Hardware/tablet_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TabletIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TabletIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TabletIcon.Style = SvgIcon;
TabletIcon.displayName = 'TabletIcon';

export default TabletIcon
