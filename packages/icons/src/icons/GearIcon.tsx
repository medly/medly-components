import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GearSvg from '../assets/Gear.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const GearIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GearSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GearIcon.Style = SvgIcon;
GearIcon.displayName = 'GearIcon';
