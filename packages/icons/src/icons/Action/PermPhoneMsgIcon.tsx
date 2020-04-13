import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermPhoneMsgIconSvg from '../../assets/Action/perm_phone_msg_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermPhoneMsgIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PermPhoneMsgIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PermPhoneMsgIcon.Style = SvgIcon;
PermPhoneMsgIcon.displayName = 'PermPhoneMsgIcon';

export default PermPhoneMsgIcon
