import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderAllIconSvg from '../../assets/Editor/border_all_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderAllIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderAllIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderAllIcon.Style = SvgIcon;
BorderAllIcon.displayName = 'BorderAllIcon';

export default BorderAllIcon
