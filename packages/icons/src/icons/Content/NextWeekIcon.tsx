import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NextWeekIconSvg from '../../assets/Content/next_week_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NextWeekIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NextWeekIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NextWeekIcon.Style = SvgIcon;
NextWeekIcon.displayName = 'NextWeekIcon';

export default NextWeekIcon
