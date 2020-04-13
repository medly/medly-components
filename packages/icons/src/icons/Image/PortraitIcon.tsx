import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PortraitIconSvg from '../../assets/Image/portrait_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PortraitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PortraitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PortraitIcon.Style = SvgIcon;
PortraitIcon.displayName = 'PortraitIcon';

export default PortraitIcon
