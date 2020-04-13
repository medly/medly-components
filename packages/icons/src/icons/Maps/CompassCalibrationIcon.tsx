import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CompassCalibrationIconSvg from '../../assets/Maps/compass_calibration_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CompassCalibrationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CompassCalibrationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CompassCalibrationIcon.Style = SvgIcon;
CompassCalibrationIcon.displayName = 'CompassCalibrationIcon';

export default CompassCalibrationIcon
