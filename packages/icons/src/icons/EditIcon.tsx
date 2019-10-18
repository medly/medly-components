// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EditSvg from '../assets/Edit.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const EditIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <EditSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

EditIcon.Style = SvgIcon;
EditIcon.displayName = 'EditIcon';
