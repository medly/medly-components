import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LayersIconSvg from '../../assets/Maps/layers_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LayersIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LayersIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LayersIcon.Style = SvgIcon;
LayersIcon.displayName = 'LayersIcon';

export default LayersIcon
