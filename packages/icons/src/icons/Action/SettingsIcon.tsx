import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SettingsIconSvg from '../../assets/Action/settings_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsIcon.Style = SvgIcon;
SettingsIcon.displayName = 'SettingsIcon';

export default SettingsIcon
