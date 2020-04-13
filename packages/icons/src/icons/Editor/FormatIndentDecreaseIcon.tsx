import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatIndentDecreaseIconSvg from '../../assets/Editor/format_indent_decrease_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatIndentDecreaseIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatIndentDecreaseIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatIndentDecreaseIcon.Style = SvgIcon;
FormatIndentDecreaseIcon.displayName = 'FormatIndentDecreaseIcon';

export default FormatIndentDecreaseIcon
