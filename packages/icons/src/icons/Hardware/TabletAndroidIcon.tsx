import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TabletAndroidIconSvg from '../../assets/Hardware/tablet_android_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TabletAndroidIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'TabletAndroidIcon';

const TabletAndroidIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default TabletAndroidIcon;
