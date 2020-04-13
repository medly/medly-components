import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatIndentIncreaseIconSvg from '../../assets/Editor/format_indent_increase_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatIndentIncreaseIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatIndentIncreaseIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatIndentIncreaseIcon.Style = SvgIcon;
FormatIndentIncreaseIcon.displayName = 'FormatIndentIncreaseIcon';

export default FormatIndentIncreaseIcon
