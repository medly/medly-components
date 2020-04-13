import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EditIconSvg from '../../assets/Forms/Edit.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EditIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EditIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EditIcon.Style = SvgIcon;
EditIcon.displayName = 'EditIcon';

export default EditIcon
