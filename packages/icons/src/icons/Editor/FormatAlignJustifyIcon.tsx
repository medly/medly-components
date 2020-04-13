import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatAlignJustifyIconSvg from '../../assets/Editor/format_align_justify_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatAlignJustifyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatAlignJustifyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatAlignJustifyIcon.Style = SvgIcon;
FormatAlignJustifyIcon.displayName = 'FormatAlignJustifyIcon';

export default FormatAlignJustifyIcon
