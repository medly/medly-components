import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SupervisorAccountIconSvg from '../../assets/Action/supervisor_account_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SupervisorAccountIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SupervisorAccountIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SupervisorAccountIcon.Style = SvgIcon;
SupervisorAccountIcon.displayName = 'SupervisorAccountIcon';

export default SupervisorAccountIcon
