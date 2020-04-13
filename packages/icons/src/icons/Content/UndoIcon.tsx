import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UndoIconSvg from '../../assets/Content/undo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UndoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <UndoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

UndoIcon.Style = SvgIcon;
UndoIcon.displayName = 'UndoIcon';

export default UndoIcon
