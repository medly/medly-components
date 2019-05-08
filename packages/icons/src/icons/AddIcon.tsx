// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import AddSvg from '../assets/Add.svg';
import SvgIcon, { Props } from '../SvgIcon';

const AddIcon: React.FunctionComponent<Props> & WithStyle = ({ size, color, ...props }) => (
    <SvgIcon size={size} color={color} {...props}>
        <AddSvg width="1em" height="1em" />
    </SvgIcon>
);

AddIcon.Style = SvgIcon;
AddIcon.displayName = 'AddIcon';
export default AddIcon;
