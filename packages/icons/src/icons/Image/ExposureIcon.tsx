import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExposureIconSvg from '../../assets/Image/exposure_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposureIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExposureIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExposureIcon.Style = SvgIcon;
ExposureIcon.displayName = 'ExposureIcon';

export default ExposureIcon
