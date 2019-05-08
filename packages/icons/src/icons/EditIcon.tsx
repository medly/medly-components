// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import EditSvg from '../assets/Edit.svg';
import SvgIcon, { Props } from '../SvgIcon';

const EditIcon: React.FunctionComponent<Props> & WithStyle = ({ size, color, ...props }) => (
    <SvgIcon size={size} color={color} {...props}>
        <EditSvg width="1em" height="1em" />
    </SvgIcon>
);

EditIcon.Style = SvgIcon;
EditIcon.displayName = 'EditIcon';
export default EditIcon;
