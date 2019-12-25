import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DropDownSvg from '../assets/DropDown.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const DropDownIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DropDownSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DropDownIcon.Style = SvgIcon;
DropDownIcon.displayName = 'DropDownIcon';
