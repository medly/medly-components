import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChevronLeftIconSvg from '../../assets/Navigation/chevron_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChevronLeftIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ChevronLeftIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ChevronLeftIcon.Style = SvgIcon;
ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export default ChevronLeftIcon
