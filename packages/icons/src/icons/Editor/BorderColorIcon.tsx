import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderColorIconSvg from '../../assets/Editor/border_color_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderColorIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderColorIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderColorIcon.Style = SvgIcon;
BorderColorIcon.displayName = 'BorderColorIcon';

export default BorderColorIcon
