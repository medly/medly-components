// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import DropDownSvg from '../assets/DropDown.svg';
import SvgIcon, { Props } from '../SvgIcon';

const DropDownIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <DropDownSvg width="1em" height="1em" />
    </SvgIcon>
);

DropDownIcon.Style = SvgIcon;
DropDownIcon.displayName = 'DropDownIcon';
export default DropDownIcon;
