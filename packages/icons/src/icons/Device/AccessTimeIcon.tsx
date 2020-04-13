import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccessTimeIconSvg from '../../assets/Device/access_time_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessTimeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AccessTimeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AccessTimeIcon.Style = SvgIcon;
AccessTimeIcon.displayName = 'AccessTimeIcon';

export default AccessTimeIcon
