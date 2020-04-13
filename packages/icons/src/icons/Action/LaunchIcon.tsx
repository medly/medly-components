import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LaunchIconSvg from '../../assets/Action/launch_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LaunchIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LaunchIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LaunchIcon.Style = SvgIcon;
LaunchIcon.displayName = 'LaunchIcon';

export default LaunchIcon
