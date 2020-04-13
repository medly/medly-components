import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CompassCalibrationIconSvg from '../../assets/Maps/compass_calibration_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CompassCalibrationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CompassCalibrationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CompassCalibrationIcon.Style = SvgIcon;
CompassCalibrationIcon.displayName = 'CompassCalibrationIcon';

export default CompassCalibrationIcon
