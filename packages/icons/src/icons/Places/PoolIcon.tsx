import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PoolIconSvg from '../../assets/Places/pool_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PoolIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PoolIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PoolIcon.Style = SvgIcon;
PoolIcon.displayName = 'PoolIcon';

export default PoolIcon
