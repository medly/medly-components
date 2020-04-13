import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoreIconSvg from '../../assets/Notification/more_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MoreIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MoreIcon.Style = SvgIcon;
MoreIcon.displayName = 'MoreIcon';

export default MoreIcon
