import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatPaintIconSvg from '../../assets/Editor/format_paint_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatPaintIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatPaintIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatPaintIcon.Style = SvgIcon;
FormatPaintIcon.displayName = 'FormatPaintIcon';

export default FormatPaintIcon
