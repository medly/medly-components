import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import InsertInvitationIconSvg from '../../assets/Editor/insert_invitation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertInvitationIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InsertInvitationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InsertInvitationIcon.Style = SvgIcon;
InsertInvitationIcon.displayName = 'InsertInvitationIcon';

export default InsertInvitationIcon
