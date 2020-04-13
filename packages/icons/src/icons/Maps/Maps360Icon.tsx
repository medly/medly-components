import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Maps360IconSvg from '../../assets/Maps/maps_360_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Maps360Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Maps360IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Maps360Icon.Style = SvgIcon;
Maps360Icon.displayName = 'Maps360Icon';

export default Maps360Icon
