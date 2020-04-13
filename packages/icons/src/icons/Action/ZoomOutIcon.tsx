import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ZoomOutIconSvg from '../../assets/Action/zoom_out_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ZoomOutIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ZoomOutIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ZoomOutIcon.Style = SvgIcon;
ZoomOutIcon.displayName = 'ZoomOutIcon';

export default ZoomOutIcon
