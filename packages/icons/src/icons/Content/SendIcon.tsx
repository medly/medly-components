import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SendIconSvg from '../../assets/Content/send_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SendIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SendIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SendIcon.Style = SvgIcon;
SendIcon.displayName = 'SendIcon';

export default SendIcon
