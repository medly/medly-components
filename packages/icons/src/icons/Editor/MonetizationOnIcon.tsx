import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MonetizationOnIconSvg from '../../assets/Editor/monetization_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MonetizationOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MonetizationOnIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MonetizationOnIcon.Style = SvgIcon;
MonetizationOnIcon.displayName = 'MonetizationOnIcon';

export default MonetizationOnIcon
