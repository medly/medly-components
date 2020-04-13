import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DragIndicatorIconSvg from '../../assets/Action/drag_indicator_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DragIndicatorIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DragIndicatorIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DragIndicatorIcon.Style = SvgIcon;
DragIndicatorIcon.displayName = 'DragIndicatorIcon';

export default DragIndicatorIcon
