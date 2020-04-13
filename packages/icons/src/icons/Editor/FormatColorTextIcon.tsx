import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatColorTextIconSvg from '../../assets/Editor/format_color_text_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatColorTextIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatColorTextIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatColorTextIcon.Style = SvgIcon;
FormatColorTextIcon.displayName = 'FormatColorTextIcon';

export default FormatColorTextIcon
