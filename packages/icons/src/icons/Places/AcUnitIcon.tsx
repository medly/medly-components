import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AcUnitIconSvg from '../../assets/Places/ac_unit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AcUnitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AcUnitIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AcUnitIcon.Style = SvgIcon;
AcUnitIcon.displayName = 'AcUnitIcon';

export default AcUnitIcon
