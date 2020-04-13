import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LayersClearIconSvg from '../../assets/Maps/layers_clear_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LayersClearIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LayersClearIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LayersClearIcon.Style = SvgIcon;
LayersClearIcon.displayName = 'LayersClearIcon';

export default LayersClearIcon
