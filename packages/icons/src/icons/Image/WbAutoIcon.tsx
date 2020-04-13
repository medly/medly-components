import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WbAutoIconSvg from '../../assets/Image/wb_auto_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WbAutoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WbAutoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WbAutoIcon.Style = SvgIcon;
WbAutoIcon.displayName = 'WbAutoIcon';

export default WbAutoIcon
