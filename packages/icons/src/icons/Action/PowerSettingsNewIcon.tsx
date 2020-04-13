import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PowerSettingsNewIconSvg from '../../assets/Action/power_settings_new_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PowerSettingsNewIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PowerSettingsNewIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PowerSettingsNewIcon.Style = SvgIcon;
PowerSettingsNewIcon.displayName = 'PowerSettingsNewIcon';

export default PowerSettingsNewIcon
