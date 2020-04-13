import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatShapesIconSvg from '../../assets/Editor/format_shapes_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatShapesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatShapesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatShapesIcon.Style = SvgIcon;
FormatShapesIcon.displayName = 'FormatShapesIcon';

export default FormatShapesIcon
