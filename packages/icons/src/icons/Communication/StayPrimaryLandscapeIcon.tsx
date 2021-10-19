import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StayPrimaryLandscapeIconSvg from '../../assets/Communication/stay_primary_landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StayPrimaryLandscapeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'StayPrimaryLandscapeIcon';

const StayPrimaryLandscapeIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default StayPrimaryLandscapeIcon;
