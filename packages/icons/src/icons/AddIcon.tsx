// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddSvg from '../assets/Add.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const AddIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <AddSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

AddIcon.Style = SvgIcon;
AddIcon.displayName = 'AddIcon';
