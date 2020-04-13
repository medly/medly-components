import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddCallIconSvg from '../../assets/Communication/add_call_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddCallIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddCallIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddCallIcon.Style = SvgIcon;
AddCallIcon.displayName = 'AddCallIcon';

export default AddCallIcon
