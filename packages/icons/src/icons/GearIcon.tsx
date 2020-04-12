import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GearIconSvg from '../assets/Gear.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const GearIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GearIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GearIcon.Style = SvgIcon;
GearIcon.displayName = 'GearIcon';

export default GearIcon
