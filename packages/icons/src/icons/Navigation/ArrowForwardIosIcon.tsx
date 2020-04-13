import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowForwardIosIconSvg from '../../assets/Navigation/arrow_forward_ios_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowForwardIosIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowForwardIosIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowForwardIosIcon.Style = SvgIcon;
ArrowForwardIosIcon.displayName = 'ArrowForwardIosIcon';

export default ArrowForwardIosIcon
