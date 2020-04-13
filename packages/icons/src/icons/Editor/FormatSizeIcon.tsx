import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatSizeIconSvg from '../../assets/Editor/format_size_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatSizeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatSizeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatSizeIcon.Style = SvgIcon;
FormatSizeIcon.displayName = 'FormatSizeIcon';

export default FormatSizeIcon
