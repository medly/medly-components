import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WbIridescentIconSvg from '../../assets/Image/wb_iridescent_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WbIridescentIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WbIridescentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WbIridescentIcon.Style = SvgIcon;
WbIridescentIcon.displayName = 'WbIridescentIcon';

export default WbIridescentIcon
