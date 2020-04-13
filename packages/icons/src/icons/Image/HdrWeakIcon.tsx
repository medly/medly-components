import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HdrWeakIconSvg from '../../assets/Image/hdr_weak_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HdrWeakIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HdrWeakIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HdrWeakIcon.Style = SvgIcon;
HdrWeakIcon.displayName = 'HdrWeakIcon';

export default HdrWeakIcon
