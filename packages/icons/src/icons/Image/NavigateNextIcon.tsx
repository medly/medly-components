import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NavigateNextIconSvg from '../../assets/Image/navigate_next_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NavigateNextIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NavigateNextIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NavigateNextIcon.Style = SvgIcon;
NavigateNextIcon.displayName = 'NavigateNextIcon';

export default NavigateNextIcon
