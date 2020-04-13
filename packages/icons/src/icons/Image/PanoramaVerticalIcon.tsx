import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PanoramaVerticalIconSvg from '../../assets/Image/panorama_vertical_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PanoramaVerticalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PanoramaVerticalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PanoramaVerticalIcon.Style = SvgIcon;
PanoramaVerticalIcon.displayName = 'PanoramaVerticalIcon';

export default PanoramaVerticalIcon
