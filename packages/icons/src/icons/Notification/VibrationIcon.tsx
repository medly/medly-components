import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VibrationIconSvg from '../../assets/Notification/vibration_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VibrationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VibrationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VibrationIcon.Style = SvgIcon;
VibrationIcon.displayName = 'VibrationIcon';

export default VibrationIcon
