import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatColorFillIconSvg from '../../assets/Editor/format_color_fill_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatColorFillIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatColorFillIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatColorFillIcon.Style = SvgIcon;
FormatColorFillIcon.displayName = 'FormatColorFillIcon';

export default FormatColorFillIcon
