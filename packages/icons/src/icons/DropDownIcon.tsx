// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import DropDownSvg from '../assets/DropDown.svg';
import SvgIcon, { Props } from '../SvgIcon';

const DropDownIcon: React.FunctionComponent<Props> & WithStyle = ({ size, color, ...props }) => (
    <SvgIcon size={size} color={color} {...props}>
        <DropDownSvg width="1em" height="1em" />
    </SvgIcon>
);

DropDownIcon.Style = SvgIcon;
DropDownIcon.displayName = 'DropDownIcon';
export default DropDownIcon;
