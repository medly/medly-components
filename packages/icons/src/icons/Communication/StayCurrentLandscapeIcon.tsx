import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StayCurrentLandscapeIconSvg from '../../assets/Communication/stay_current_landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StayCurrentLandscapeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StayCurrentLandscapeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StayCurrentLandscapeIcon.Style = SvgIcon;
StayCurrentLandscapeIcon.displayName = 'StayCurrentLandscapeIcon';

export default StayCurrentLandscapeIcon
