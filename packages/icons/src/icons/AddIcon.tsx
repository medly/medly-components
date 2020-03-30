import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddSvg from '../assets/Add.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const AddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddIcon.Style = SvgIcon;
AddIcon.displayName = 'AddIcon';
