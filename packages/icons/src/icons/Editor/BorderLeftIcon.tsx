import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderLeftIconSvg from '../../assets/Editor/border_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderLeftIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderLeftIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderLeftIcon.Style = SvgIcon;
BorderLeftIcon.displayName = 'BorderLeftIcon';

export default BorderLeftIcon
