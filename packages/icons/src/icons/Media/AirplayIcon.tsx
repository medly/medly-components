import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirplayIconSvg from '../../assets/Media/airplay_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirplayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AirplayIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AirplayIcon.Style = SvgIcon;
AirplayIcon.displayName = 'AirplayIcon';

export default AirplayIcon
