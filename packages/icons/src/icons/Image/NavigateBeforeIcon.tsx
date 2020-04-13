import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NavigateBeforeIconSvg from '../../assets/Image/navigate_before_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NavigateBeforeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NavigateBeforeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NavigateBeforeIcon.Style = SvgIcon;
NavigateBeforeIcon.displayName = 'NavigateBeforeIcon';

export default NavigateBeforeIcon
