import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StayPrimaryPortraitIconSvg from '../../assets/Communication/stay_primary_portrait_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StayPrimaryPortraitIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StayPrimaryPortraitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StayPrimaryPortraitIcon.Style = SvgIcon;
StayPrimaryPortraitIcon.displayName = 'StayPrimaryPortraitIcon';

export default StayPrimaryPortraitIcon
