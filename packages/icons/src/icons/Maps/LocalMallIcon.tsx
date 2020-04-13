import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalMallIconSvg from '../../assets/Maps/local_mall_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalMallIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalMallIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalMallIcon.Style = SvgIcon;
LocalMallIcon.displayName = 'LocalMallIcon';

export default LocalMallIcon
