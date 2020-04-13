import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BrushIconSvg from '../../assets/Image/brush_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrushIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BrushIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BrushIcon.Style = SvgIcon;
BrushIcon.displayName = 'BrushIcon';

export default BrushIcon
