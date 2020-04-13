import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HealingIconSvg from '../../assets/Image/healing_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HealingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HealingIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HealingIcon.Style = SvgIcon;
HealingIcon.displayName = 'HealingIcon';

export default HealingIcon
