import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DiscFullIconSvg from '../../assets/Notification/disc_full_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DiscFullIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DiscFullIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DiscFullIcon.Style = SvgIcon;
DiscFullIcon.displayName = 'DiscFullIcon';

export default DiscFullIcon
