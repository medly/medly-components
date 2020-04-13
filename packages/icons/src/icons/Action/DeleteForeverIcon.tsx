import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DeleteForeverIconSvg from '../../assets/Action/delete_forever_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeleteForeverIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DeleteForeverIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DeleteForeverIcon.Style = SvgIcon;
DeleteForeverIcon.displayName = 'DeleteForeverIcon';

export default DeleteForeverIcon
