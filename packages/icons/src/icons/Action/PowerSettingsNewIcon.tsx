import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PowerSettingsNewIconSvg from '../../assets/Action/power_settings_new_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PowerSettingsNewIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PowerSettingsNewIcon';

const PowerSettingsNewIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default PowerSettingsNewIcon
