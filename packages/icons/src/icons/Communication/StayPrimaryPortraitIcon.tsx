import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StayPrimaryPortraitIconSvg from '../../assets/Communication/stay_primary_portrait_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StayPrimaryPortraitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StayPrimaryPortraitIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StayPrimaryPortraitIcon.Style = SvgIcon;
StayPrimaryPortraitIcon.displayName = 'StayPrimaryPortraitIcon';

export default StayPrimaryPortraitIcon
