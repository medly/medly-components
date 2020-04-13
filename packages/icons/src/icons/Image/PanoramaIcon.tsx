import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PanoramaIconSvg from '../../assets/Image/panorama_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PanoramaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PanoramaIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PanoramaIcon.Style = SvgIcon;
PanoramaIcon.displayName = 'PanoramaIcon';

export default PanoramaIcon
