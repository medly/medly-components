import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LayersIconSvg from '../../assets/Maps/layers_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LayersIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LayersIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LayersIcon.Style = SvgIcon;
LayersIcon.displayName = 'LayersIcon';

export default LayersIcon
