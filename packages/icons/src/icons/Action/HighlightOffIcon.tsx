import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HighlightOffIconSvg from '../../assets/Action/highlight_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HighlightOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HighlightOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HighlightOffIcon.Style = SvgIcon;
HighlightOffIcon.displayName = 'HighlightOffIcon';

export default HighlightOffIcon
