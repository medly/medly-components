import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import IndeterminateCheckBoxIconSvg from '../../assets/Toggle/indeterminate_check_box_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const IndeterminateCheckBoxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <IndeterminateCheckBoxIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

IndeterminateCheckBoxIcon.Style = SvgIcon;
IndeterminateCheckBoxIcon.displayName = 'IndeterminateCheckBoxIcon';

export default IndeterminateCheckBoxIcon
