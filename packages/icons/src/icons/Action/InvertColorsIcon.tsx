import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InvertColorsIconSvg from '../../assets/Action/invert_colors_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InvertColorsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InvertColorsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InvertColorsIcon.Style = SvgIcon;
InvertColorsIcon.displayName = 'InvertColorsIcon';

export default InvertColorsIcon
