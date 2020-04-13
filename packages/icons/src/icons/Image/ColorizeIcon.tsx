import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ColorizeIconSvg from '../../assets/Image/colorize_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ColorizeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ColorizeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ColorizeIcon.Style = SvgIcon;
ColorizeIcon.displayName = 'ColorizeIcon';

export default ColorizeIcon
