import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WavesIconSvg from '../../assets/Content/waves_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WavesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WavesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WavesIcon.Style = SvgIcon;
WavesIcon.displayName = 'WavesIcon';

export default WavesIcon
