import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowDropDownCircleIconSvg from '../../assets/Navigation/arrow_drop_down_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowDropDownCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowDropDownCircleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowDropDownCircleIcon.Style = SvgIcon;
ArrowDropDownCircleIcon.displayName = 'ArrowDropDownCircleIcon';

export default ArrowDropDownCircleIcon
