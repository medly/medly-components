import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TransitEnterexitIconSvg from '../../assets/Maps/transit_enterexit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TransitEnterexitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TransitEnterexitIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TransitEnterexitIcon.Style = SvgIcon;
TransitEnterexitIcon.displayName = 'TransitEnterexitIcon';

export default TransitEnterexitIcon
