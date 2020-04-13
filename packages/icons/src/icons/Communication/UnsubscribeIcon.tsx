import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UnsubscribeIconSvg from '../../assets/Communication/unsubscribe_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UnsubscribeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <UnsubscribeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

UnsubscribeIcon.Style = SvgIcon;
UnsubscribeIcon.displayName = 'UnsubscribeIcon';

export default UnsubscribeIcon
