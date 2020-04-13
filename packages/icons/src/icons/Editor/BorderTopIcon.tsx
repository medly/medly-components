import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderTopIconSvg from '../../assets/Editor/border_top_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderTopIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderTopIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderTopIcon.Style = SvgIcon;
BorderTopIcon.displayName = 'BorderTopIcon';

export default BorderTopIcon
