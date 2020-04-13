import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatTextdirectionRToLIconSvg from '../../assets/Editor/format_textdirection_r_to_l_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatTextdirectionRToLIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatTextdirectionRToLIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatTextdirectionRToLIcon.Style = SvgIcon;
FormatTextdirectionRToLIcon.displayName = 'FormatTextdirectionRToLIcon';

export default FormatTextdirectionRToLIcon
