import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OfflineBoltIconSvg from '../../assets/Action/offline_bolt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OfflineBoltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <OfflineBoltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

OfflineBoltIcon.Style = SvgIcon;
OfflineBoltIcon.displayName = 'OfflineBoltIcon';

export default OfflineBoltIcon
