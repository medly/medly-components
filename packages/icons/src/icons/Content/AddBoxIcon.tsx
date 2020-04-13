import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddBoxIconSvg from '../../assets/Content/add_box_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddBoxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddBoxIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddBoxIcon.Style = SvgIcon;
AddBoxIcon.displayName = 'AddBoxIcon';

export default AddBoxIcon
