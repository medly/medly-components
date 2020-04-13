import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BurstModeIconSvg from '../../assets/Image/burst_mode_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BurstModeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BurstModeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BurstModeIcon.Style = SvgIcon;
BurstModeIcon.displayName = 'BurstModeIcon';

export default BurstModeIcon
