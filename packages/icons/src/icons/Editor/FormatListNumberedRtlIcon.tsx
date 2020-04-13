import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatListNumberedRtlIconSvg from '../../assets/Editor/format_list_numbered_rtl_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatListNumberedRtlIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatListNumberedRtlIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatListNumberedRtlIcon.Style = SvgIcon;
FormatListNumberedRtlIcon.displayName = 'FormatListNumberedRtlIcon';

export default FormatListNumberedRtlIcon
