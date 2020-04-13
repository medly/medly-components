import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderOuterIconSvg from '../../assets/Editor/border_outer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderOuterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderOuterIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderOuterIcon.Style = SvgIcon;
BorderOuterIcon.displayName = 'BorderOuterIcon';

export default BorderOuterIcon
