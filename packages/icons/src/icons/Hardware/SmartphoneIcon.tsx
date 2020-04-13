import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SmartphoneIconSvg from '../../assets/Hardware/smartphone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SmartphoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SmartphoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SmartphoneIcon.Style = SvgIcon;
SmartphoneIcon.displayName = 'SmartphoneIcon';

export default SmartphoneIcon
