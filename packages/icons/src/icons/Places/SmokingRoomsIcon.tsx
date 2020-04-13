import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SmokingRoomsIconSvg from '../../assets/Places/smoking_rooms_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SmokingRoomsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SmokingRoomsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SmokingRoomsIcon.Style = SvgIcon;
SmokingRoomsIcon.displayName = 'SmokingRoomsIcon';

export default SmokingRoomsIcon
