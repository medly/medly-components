import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PowerButtonSvg from '../assets/PowerButton.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const PowerButtonIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PowerButtonSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PowerButtonIcon.Style = SvgIcon;
PowerButtonIcon.displayName = 'PowerButtonIcon';
