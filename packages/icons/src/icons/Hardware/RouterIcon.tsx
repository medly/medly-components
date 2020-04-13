import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RouterIconSvg from '../../assets/Hardware/router_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RouterIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RouterIcon.Style = SvgIcon;
RouterIcon.displayName = 'RouterIcon';

export default RouterIcon
