import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RefreshIconSvg from '../../assets/Navigation/refresh_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RefreshIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RefreshIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RefreshIcon.Style = SvgIcon;
RefreshIcon.displayName = 'RefreshIcon';

export default RefreshIcon
