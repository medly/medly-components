import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExitToAppIconSvg from '../../assets/Action/exit_to_app_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExitToAppIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExitToAppIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExitToAppIcon.Style = SvgIcon;
ExitToAppIcon.displayName = 'ExitToAppIcon';

export default ExitToAppIcon
