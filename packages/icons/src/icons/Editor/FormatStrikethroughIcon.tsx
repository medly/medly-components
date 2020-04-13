import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatStrikethroughIconSvg from '../../assets/Editor/format_strikethrough_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatStrikethroughIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatStrikethroughIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatStrikethroughIcon.Style = SvgIcon;
FormatStrikethroughIcon.displayName = 'FormatStrikethroughIcon';

export default FormatStrikethroughIcon
