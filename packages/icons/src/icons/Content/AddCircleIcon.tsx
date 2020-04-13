import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddCircleIconSvg from '../../assets/Content/add_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddCircleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddCircleIcon.Style = SvgIcon;
AddCircleIcon.displayName = 'AddCircleIcon';

export default AddCircleIcon
