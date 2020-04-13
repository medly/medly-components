import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TerrainIconSvg from '../../assets/Maps/terrain_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TerrainIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TerrainIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TerrainIcon.Style = SvgIcon;
TerrainIcon.displayName = 'TerrainIcon';

export default TerrainIcon
