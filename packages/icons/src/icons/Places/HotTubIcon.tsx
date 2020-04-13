import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HotTubIconSvg from '../../assets/Places/hot_tub_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HotTubIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HotTubIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HotTubIcon.Style = SvgIcon;
HotTubIcon.displayName = 'HotTubIcon';

export default HotTubIcon
