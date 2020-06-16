import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ColorizeIconSvg from '../../assets/Image/colorize_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ColorizeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ColorizeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ColorizeIcon.Style = SvgIcon;
ColorizeIcon.displayName = 'ColorizeIcon';

export default ColorizeIcon
