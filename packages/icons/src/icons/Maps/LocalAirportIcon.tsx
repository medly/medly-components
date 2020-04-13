import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalAirportIconSvg from '../../assets/Maps/local_airport_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalAirportIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalAirportIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalAirportIcon.Style = SvgIcon;
LocalAirportIcon.displayName = 'LocalAirportIcon';

export default LocalAirportIcon
