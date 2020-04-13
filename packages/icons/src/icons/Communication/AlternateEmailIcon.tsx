import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AlternateEmailIconSvg from '../../assets/Communication/alternate_email_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlternateEmailIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AlternateEmailIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AlternateEmailIcon.Style = SvgIcon;
AlternateEmailIcon.displayName = 'AlternateEmailIcon';

export default AlternateEmailIcon
