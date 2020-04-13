import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowRightAltIconSvg from '../../assets/Action/arrow_right_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowRightAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowRightAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowRightAltIcon.Style = SvgIcon;
ArrowRightAltIcon.displayName = 'ArrowRightAltIcon';

export default ArrowRightAltIcon
