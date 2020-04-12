import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PowerButtonIconSvg from '../assets/PowerButton.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const PowerButtonIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PowerButtonIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PowerButtonIcon.Style = SvgIcon;
PowerButtonIcon.displayName = 'PowerButtonIcon';

export default PowerButtonIcon
