import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DownArrowIconSvg from '../assets/DownArrow.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const DownArrowIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DownArrowIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DownArrowIcon.Style = SvgIcon;
DownArrowIcon.displayName = 'DownArrowIcon';

export default DownArrowIcon
