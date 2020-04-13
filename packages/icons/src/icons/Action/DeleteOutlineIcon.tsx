import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DeleteOutlineIconSvg from '../../assets/Action/delete_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeleteOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DeleteOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DeleteOutlineIcon.Style = SvgIcon;
DeleteOutlineIcon.displayName = 'DeleteOutlineIcon';

export default DeleteOutlineIcon
