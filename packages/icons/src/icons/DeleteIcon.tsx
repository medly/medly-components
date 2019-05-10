// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import DeleteSvg from '../assets/Delete.svg';
import SvgIcon, { Props } from '../SvgIcon';

const DeleteIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <DeleteSvg width="1em" height="1em" />
    </SvgIcon>
);

DeleteIcon.Style = SvgIcon;
DeleteIcon.displayName = 'DeleteIcon';
export default DeleteIcon;
