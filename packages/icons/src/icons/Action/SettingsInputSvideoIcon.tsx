import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SettingsInputSvideoIconSvg from '../../assets/Action/settings_input_svideo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsInputSvideoIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsInputSvideoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsInputSvideoIcon.Style = SvgIcon;
SettingsInputSvideoIcon.displayName = 'SettingsInputSvideoIcon';

export default SettingsInputSvideoIcon
