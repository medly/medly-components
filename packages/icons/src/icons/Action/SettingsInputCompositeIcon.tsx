import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsInputCompositeIconSvg from '../../assets/Action/settings_input_composite_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsInputCompositeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SettingsInputCompositeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SettingsInputCompositeIcon.Style = SvgIcon;
SettingsInputCompositeIcon.displayName = 'SettingsInputCompositeIcon';

export default SettingsInputCompositeIcon
