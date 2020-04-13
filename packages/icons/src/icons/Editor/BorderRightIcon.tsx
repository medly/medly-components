import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderRightIconSvg from '../../assets/Editor/border_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderRightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderRightIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderRightIcon.Style = SvgIcon;
BorderRightIcon.displayName = 'BorderRightIcon';

export default BorderRightIcon
