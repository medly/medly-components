import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EditLocationIconSvg from '../../assets/Maps/edit_location_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EditLocationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EditLocationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EditLocationIcon.Style = SvgIcon;
EditLocationIcon.displayName = 'EditLocationIcon';

export default EditLocationIcon
