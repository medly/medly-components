import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatClearIconSvg from '../../assets/Editor/format_clear_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatClearIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatClearIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatClearIcon.Style = SvgIcon;
FormatClearIcon.displayName = 'FormatClearIcon';

export default FormatClearIcon
