import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InsertInvitationIconSvg from '../../assets/Editor/insert_invitation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertInvitationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InsertInvitationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InsertInvitationIcon.Style = SvgIcon;
InsertInvitationIcon.displayName = 'InsertInvitationIcon';

export default InsertInvitationIcon
