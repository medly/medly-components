import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TabletMacIconSvg from '../../assets/Hardware/tablet_mac_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TabletMacIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TabletMacIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TabletMacIcon.Style = SvgIcon;
TabletMacIcon.displayName = 'TabletMacIcon';

export default TabletMacIcon
