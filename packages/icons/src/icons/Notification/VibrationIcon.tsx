import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VibrationIconSvg from '../../assets/Notification/vibration_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VibrationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VibrationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VibrationIcon.Style = SvgIcon;
VibrationIcon.displayName = 'VibrationIcon';

export default VibrationIcon
