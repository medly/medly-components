import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StayCurrentPortraitIconSvg from '../../assets/Communication/stay_current_portrait_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StayCurrentPortraitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StayCurrentPortraitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StayCurrentPortraitIcon.Style = SvgIcon;
StayCurrentPortraitIcon.displayName = 'StayCurrentPortraitIcon';

export default StayCurrentPortraitIcon
