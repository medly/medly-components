import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PanoramaVerticalIconSvg from '../../assets/Image/panorama_vertical_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PanoramaVerticalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PanoramaVerticalIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PanoramaVerticalIcon.Style = SvgIcon;
PanoramaVerticalIcon.displayName = 'PanoramaVerticalIcon';

export default PanoramaVerticalIcon
