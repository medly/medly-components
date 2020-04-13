import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RestoreFromTrashIconSvg from '../../assets/Action/restore_from_trash_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RestoreFromTrashIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RestoreFromTrashIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RestoreFromTrashIcon.Style = SvgIcon;
RestoreFromTrashIcon.displayName = 'RestoreFromTrashIcon';

export default RestoreFromTrashIcon
