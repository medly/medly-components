import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PanoramaWideAngleIconSvg from '../../assets/Image/panorama_wide_angle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PanoramaWideAngleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PanoramaWideAngleIcon';

const PanoramaWideAngleIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default PanoramaWideAngleIcon;
