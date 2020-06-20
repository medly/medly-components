import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ColorLensIconSvg from '../../assets/Image/color_lens_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ColorLensIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ColorLensIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ColorLensIcon.Style = SvgIcon;
ColorLensIcon.displayName = 'ColorLensIcon';

export default ColorLensIcon
