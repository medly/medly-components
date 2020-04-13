import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SimCardIconSvg from '../../assets/Hardware/sim_card_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SimCardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SimCardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SimCardIcon.Style = SvgIcon;
SimCardIcon.displayName = 'SimCardIcon';

export default SimCardIcon
