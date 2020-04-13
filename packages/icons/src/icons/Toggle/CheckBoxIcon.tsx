import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckBoxIconSvg from '../../assets/Toggle/check_box_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckBoxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CheckBoxIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CheckBoxIcon.Style = SvgIcon;
CheckBoxIcon.displayName = 'CheckBoxIcon';

export default CheckBoxIcon
