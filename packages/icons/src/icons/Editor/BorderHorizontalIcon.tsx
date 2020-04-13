import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderHorizontalIconSvg from '../../assets/Editor/border_horizontal_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderHorizontalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderHorizontalIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderHorizontalIcon.Style = SvgIcon;
BorderHorizontalIcon.displayName = 'BorderHorizontalIcon';

export default BorderHorizontalIcon
