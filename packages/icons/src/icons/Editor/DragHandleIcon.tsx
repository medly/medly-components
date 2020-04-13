import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DragHandleIconSvg from '../../assets/Editor/drag_handle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DragHandleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DragHandleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DragHandleIcon.Style = SvgIcon;
DragHandleIcon.displayName = 'DragHandleIcon';

export default DragHandleIcon
