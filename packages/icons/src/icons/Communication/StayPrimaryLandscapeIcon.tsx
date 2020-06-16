import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StayPrimaryLandscapeIconSvg from '../../assets/Communication/stay_primary_landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StayPrimaryLandscapeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StayPrimaryLandscapeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StayPrimaryLandscapeIcon.Style = SvgIcon;
StayPrimaryLandscapeIcon.displayName = 'StayPrimaryLandscapeIcon';

export default StayPrimaryLandscapeIcon
