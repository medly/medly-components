import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TerrainIconSvg from '../../assets/Maps/terrain_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TerrainIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TerrainIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TerrainIcon.Style = SvgIcon;
TerrainIcon.displayName = 'TerrainIcon';

export default TerrainIcon
