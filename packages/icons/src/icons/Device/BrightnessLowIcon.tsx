import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BrightnessLowIconSvg from '../../assets/Device/brightness_low_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrightnessLowIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BrightnessLowIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BrightnessLowIcon.Style = SvgIcon;
BrightnessLowIcon.displayName = 'BrightnessLowIcon';

export default BrightnessLowIcon
