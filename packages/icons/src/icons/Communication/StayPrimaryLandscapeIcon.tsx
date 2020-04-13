import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StayPrimaryLandscapeIconSvg from '../../assets/Communication/stay_primary_landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StayPrimaryLandscapeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StayPrimaryLandscapeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StayPrimaryLandscapeIcon.Style = SvgIcon;
StayPrimaryLandscapeIcon.displayName = 'StayPrimaryLandscapeIcon';

export default StayPrimaryLandscapeIcon
