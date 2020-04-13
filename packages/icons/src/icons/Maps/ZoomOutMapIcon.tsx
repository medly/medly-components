import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ZoomOutMapIconSvg from '../../assets/Maps/zoom_out_map_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ZoomOutMapIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ZoomOutMapIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ZoomOutMapIcon.Style = SvgIcon;
ZoomOutMapIcon.displayName = 'ZoomOutMapIcon';

export default ZoomOutMapIcon
