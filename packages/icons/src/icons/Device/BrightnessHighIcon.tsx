import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BrightnessHighIconSvg from '../../assets/Device/brightness_high_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrightnessHighIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BrightnessHighIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BrightnessHighIcon.Style = SvgIcon;
BrightnessHighIcon.displayName = 'BrightnessHighIcon';

export default BrightnessHighIcon
