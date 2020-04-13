import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AutorenewIconSvg from '../../assets/Action/autorenew_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AutorenewIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AutorenewIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AutorenewIcon.Style = SvgIcon;
AutorenewIcon.displayName = 'AutorenewIcon';

export default AutorenewIcon
