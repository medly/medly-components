import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PanoramaWideAngleIconSvg from '../../assets/Image/panorama_wide_angle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PanoramaWideAngleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PanoramaWideAngleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PanoramaWideAngleIcon.Style = SvgIcon;
PanoramaWideAngleIcon.displayName = 'PanoramaWideAngleIcon';

export default PanoramaWideAngleIcon
