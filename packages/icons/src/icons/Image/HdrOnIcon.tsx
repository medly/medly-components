import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HdrOnIconSvg from '../../assets/Image/hdr_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HdrOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HdrOnIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HdrOnIcon.Style = SvgIcon;
HdrOnIcon.displayName = 'HdrOnIcon';

export default HdrOnIcon
