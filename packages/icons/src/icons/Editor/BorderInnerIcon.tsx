import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderInnerIconSvg from '../../assets/Editor/border_inner_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderInnerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderInnerIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderInnerIcon.Style = SvgIcon;
BorderInnerIcon.displayName = 'BorderInnerIcon';

export default BorderInnerIcon
