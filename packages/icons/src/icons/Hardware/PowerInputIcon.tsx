import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PowerInputIconSvg from '../../assets/Hardware/power_input_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PowerInputIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PowerInputIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PowerInputIcon.Style = SvgIcon;
PowerInputIcon.displayName = 'PowerInputIcon';

export default PowerInputIcon
