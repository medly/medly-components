import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PanoramaIconSvg from '../../assets/Image/panorama_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PanoramaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PanoramaIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PanoramaIcon.Style = SvgIcon;
PanoramaIcon.displayName = 'PanoramaIcon';

export default PanoramaIcon
