import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DropDownIconSvg from '../assets/DropDown.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const DropDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DropDownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DropDownIcon.Style = SvgIcon;
DropDownIcon.displayName = 'DropDownIcon';

export default DropDownIcon
