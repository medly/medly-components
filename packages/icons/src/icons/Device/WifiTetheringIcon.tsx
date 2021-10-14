import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WifiTetheringIconSvg from '../../assets/Device/wifi_tethering_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WifiTetheringIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'WifiTetheringIcon';

const WifiTetheringIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default WifiTetheringIcon;
