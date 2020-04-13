import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StatementIconSvg from '../../assets/Forms/Statement.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StatementIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StatementIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StatementIcon.Style = SvgIcon;
StatementIcon.displayName = 'StatementIcon';

export default StatementIcon
