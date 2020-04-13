import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OfflinePinIconSvg from '../../assets/Action/offline_pin_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OfflinePinIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <OfflinePinIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

OfflinePinIcon.Style = SvgIcon;
OfflinePinIcon.displayName = 'OfflinePinIcon';

export default OfflinePinIcon
