import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalPhoneIconSvg from '../../assets/Maps/local_phone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPhoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalPhoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalPhoneIcon.Style = SvgIcon;
LocalPhoneIcon.displayName = 'LocalPhoneIcon';

export default LocalPhoneIcon
