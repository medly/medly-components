import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WbIncandescentIconSvg from '../../assets/Image/wb_incandescent_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WbIncandescentIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WbIncandescentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WbIncandescentIcon.Style = SvgIcon;
WbIncandescentIcon.displayName = 'WbIncandescentIcon';

export default WbIncandescentIcon
