import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CastConnectedIconSvg from '../../assets/Hardware/cast_connected_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CastConnectedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CastConnectedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CastConnectedIcon.Style = SvgIcon;
CastConnectedIcon.displayName = 'CastConnectedIcon';

export default CastConnectedIcon
