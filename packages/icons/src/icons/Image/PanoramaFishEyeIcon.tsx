import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PanoramaFishEyeIconSvg from '../../assets/Image/panorama_fish_eye_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PanoramaFishEyeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PanoramaFishEyeIcon';

const PanoramaFishEyeIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default PanoramaFishEyeIcon;
