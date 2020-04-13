import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalParkingIconSvg from '../../assets/Maps/local_parking_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalParkingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalParkingIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalParkingIcon.Style = SvgIcon;
LocalParkingIcon.displayName = 'LocalParkingIcon';

export default LocalParkingIcon
