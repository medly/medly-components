import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ZoomInIconSvg from '../../assets/Action/zoom_in_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ZoomInIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ZoomInIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ZoomInIcon.Style = SvgIcon;
ZoomInIcon.displayName = 'ZoomInIcon';

export default ZoomInIcon
