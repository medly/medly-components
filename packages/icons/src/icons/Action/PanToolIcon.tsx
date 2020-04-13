import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PanToolIconSvg from '../../assets/Action/pan_tool_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PanToolIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PanToolIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PanToolIcon.Style = SvgIcon;
PanToolIcon.displayName = 'PanToolIcon';

export default PanToolIcon
