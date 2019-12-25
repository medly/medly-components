import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StatementSvg from '../assets/Statement.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const StatementIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StatementSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StatementIcon.Style = SvgIcon;
StatementIcon.displayName = 'StatementIcon';
