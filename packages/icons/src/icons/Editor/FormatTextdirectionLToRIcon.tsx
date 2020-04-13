import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatTextdirectionLToRIconSvg from '../../assets/Editor/format_textdirection_l_to_r_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatTextdirectionLToRIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatTextdirectionLToRIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatTextdirectionLToRIcon.Style = SvgIcon;
FormatTextdirectionLToRIcon.displayName = 'FormatTextdirectionLToRIcon';

export default FormatTextdirectionLToRIcon
