import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LineStyleIconSvg from '../../assets/Action/line_style_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LineStyleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LineStyleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LineStyleIcon.Style = SvgIcon;
LineStyleIcon.displayName = 'LineStyleIcon';

export default LineStyleIcon
