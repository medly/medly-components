import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WbCloudyIconSvg from '../../assets/Image/wb_cloudy_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WbCloudyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WbCloudyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WbCloudyIcon.Style = SvgIcon;
WbCloudyIcon.displayName = 'WbCloudyIcon';

export default WbCloudyIcon
