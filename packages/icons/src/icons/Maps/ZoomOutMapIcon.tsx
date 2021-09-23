import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ZoomOutMapIconSvg from '../../assets/Maps/zoom_out_map_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ZoomOutMapIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ZoomOutMapIcon';

const ZoomOutMapIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default ZoomOutMapIcon
