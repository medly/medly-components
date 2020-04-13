import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DehazeIconSvg from '../../assets/Image/dehaze_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DehazeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DehazeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DehazeIcon.Style = SvgIcon;
DehazeIcon.displayName = 'DehazeIcon';

export default DehazeIcon
