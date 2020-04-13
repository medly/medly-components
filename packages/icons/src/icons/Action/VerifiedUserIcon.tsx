import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VerifiedUserIconSvg from '../../assets/Action/verified_user_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VerifiedUserIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VerifiedUserIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VerifiedUserIcon.Style = SvgIcon;
VerifiedUserIcon.displayName = 'VerifiedUserIcon';

export default VerifiedUserIcon
