import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DeleteSvg from '../assets/Delete.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const DeleteIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DeleteSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DeleteIcon.Style = SvgIcon;
DeleteIcon.displayName = 'DeleteIcon';
