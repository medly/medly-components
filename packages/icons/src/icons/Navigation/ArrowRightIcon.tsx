import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowRightIconSvg from '../../assets/Navigation/arrow_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowRightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowRightIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowRightIcon.Style = SvgIcon;
ArrowRightIcon.displayName = 'ArrowRightIcon';

export default ArrowRightIcon
