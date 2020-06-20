import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PanoramaHorizontalIconSvg from '../../assets/Image/panorama_horizontal_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PanoramaHorizontalIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PanoramaHorizontalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PanoramaHorizontalIcon.Style = SvgIcon;
PanoramaHorizontalIcon.displayName = 'PanoramaHorizontalIcon';

export default PanoramaHorizontalIcon
