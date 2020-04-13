import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ColorLensIconSvg from '../../assets/Image/color_lens_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ColorLensIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ColorLensIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ColorLensIcon.Style = SvgIcon;
ColorLensIcon.displayName = 'ColorLensIcon';

export default ColorLensIcon
