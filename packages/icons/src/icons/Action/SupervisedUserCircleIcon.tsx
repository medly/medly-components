import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SupervisedUserCircleIconSvg from '../../assets/Action/supervised_user_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SupervisedUserCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SupervisedUserCircleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SupervisedUserCircleIcon.Style = SvgIcon;
SupervisedUserCircleIcon.displayName = 'SupervisedUserCircleIcon';

export default SupervisedUserCircleIcon
