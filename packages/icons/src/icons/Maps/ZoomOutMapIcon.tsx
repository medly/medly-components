import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ZoomOutMapIconSvg from '../../assets/Maps/zoom_out_map_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ZoomOutMapIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ZoomOutMapIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ZoomOutMapIcon.Style = SvgIcon;
ZoomOutMapIcon.displayName = 'ZoomOutMapIcon';

export default ZoomOutMapIcon
