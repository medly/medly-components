import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderStyleIconSvg from '../../assets/Editor/border_style_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderStyleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderStyleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderStyleIcon.Style = SvgIcon;
BorderStyleIcon.displayName = 'BorderStyleIcon';

export default BorderStyleIcon
