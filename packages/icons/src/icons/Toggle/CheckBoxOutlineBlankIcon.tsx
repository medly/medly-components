import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckBoxOutlineBlankIconSvg from '../../assets/Toggle/check_box_outline_blank_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckBoxOutlineBlankIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CheckBoxOutlineBlankIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CheckBoxOutlineBlankIcon.Style = SvgIcon;
CheckBoxOutlineBlankIcon.displayName = 'CheckBoxOutlineBlankIcon';

export default CheckBoxOutlineBlankIcon
