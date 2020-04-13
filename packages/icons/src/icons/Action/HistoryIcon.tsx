import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HistoryIconSvg from '../../assets/Action/history_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HistoryIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HistoryIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HistoryIcon.Style = SvgIcon;
HistoryIcon.displayName = 'HistoryIcon';

export default HistoryIcon
