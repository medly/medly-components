import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChangeHistoryIconSvg from '../../assets/Action/change_history_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChangeHistoryIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ChangeHistoryIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ChangeHistoryIcon.Style = SvgIcon;
ChangeHistoryIcon.displayName = 'ChangeHistoryIcon';

export default ChangeHistoryIcon
