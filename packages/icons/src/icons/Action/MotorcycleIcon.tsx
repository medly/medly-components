import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MotorcycleIconSvg from '../../assets/Action/motorcycle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MotorcycleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MotorcycleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MotorcycleIcon.Style = SvgIcon;
MotorcycleIcon.displayName = 'MotorcycleIcon';

export default MotorcycleIcon
