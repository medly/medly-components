import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EditSvg from '../assets/Edit.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const EditIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EditSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EditIcon.Style = SvgIcon;
EditIcon.displayName = 'EditIcon';
