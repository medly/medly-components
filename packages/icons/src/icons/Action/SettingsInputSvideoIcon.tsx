import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsInputSvideoIconSvg from '../../assets/Action/settings_input_svideo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsInputSvideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SettingsInputSvideoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SettingsInputSvideoIcon.Style = SvgIcon;
SettingsInputSvideoIcon.displayName = 'SettingsInputSvideoIcon';

export default SettingsInputSvideoIcon
