import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ConfirmationNumberIconSvg from '../../assets/Notification/confirmation_number_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ConfirmationNumberIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ConfirmationNumberIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ConfirmationNumberIcon.Style = SvgIcon;
ConfirmationNumberIcon.displayName = 'ConfirmationNumberIcon';

export default ConfirmationNumberIcon
