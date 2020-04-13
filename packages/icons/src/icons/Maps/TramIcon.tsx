import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TramIconSvg from '../../assets/Maps/tram_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TramIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TramIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TramIcon.Style = SvgIcon;
TramIcon.displayName = 'TramIcon';

export default TramIcon
