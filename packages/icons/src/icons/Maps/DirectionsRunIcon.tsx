import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsRunIconSvg from '../../assets/Maps/directions_run_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsRunIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DirectionsRunIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DirectionsRunIcon.Style = SvgIcon;
DirectionsRunIcon.displayName = 'DirectionsRunIcon';

export default DirectionsRunIcon
