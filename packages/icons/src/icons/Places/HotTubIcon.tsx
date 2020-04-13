import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HotTubIconSvg from '../../assets/Places/hot_tub_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HotTubIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HotTubIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HotTubIcon.Style = SvgIcon;
HotTubIcon.displayName = 'HotTubIcon';

export default HotTubIcon
