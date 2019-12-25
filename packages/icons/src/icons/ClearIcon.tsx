import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ClearSvg from '../assets/Clear.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const ClearIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ClearSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ClearIcon.Style = SvgIcon;
ClearIcon.displayName = 'ClearIcon';
