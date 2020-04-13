import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatColorResetIconSvg from '../../assets/Editor/format_color_reset_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatColorResetIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatColorResetIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatColorResetIcon.Style = SvgIcon;
FormatColorResetIcon.displayName = 'FormatColorResetIcon';

export default FormatColorResetIcon
