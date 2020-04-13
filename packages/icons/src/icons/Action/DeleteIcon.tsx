import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DeleteIconSvg from '../../assets/Action/delete_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeleteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DeleteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DeleteIcon.Style = SvgIcon;
DeleteIcon.displayName = 'DeleteIcon';

export default DeleteIcon
