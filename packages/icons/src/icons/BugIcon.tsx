import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BugIconSvg from '../assets/Bug.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const BugIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BugIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BugIcon.Style = SvgIcon;
BugIcon.displayName = 'BugIcon';

export default BugIcon
