import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddIconSvg from '../../assets/Content/add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddIcon.Style = SvgIcon;
AddIcon.displayName = 'AddIcon';

export default AddIcon
