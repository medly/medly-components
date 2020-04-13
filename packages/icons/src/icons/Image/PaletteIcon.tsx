import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PaletteIconSvg from '../../assets/Image/palette_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PaletteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PaletteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PaletteIcon.Style = SvgIcon;
PaletteIcon.displayName = 'PaletteIcon';

export default PaletteIcon
