import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Crop54IconSvg from '../../assets/Image/crop_5_4_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Crop54Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Crop54IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Crop54Icon.Style = SvgIcon;
Crop54Icon.displayName = 'Crop54Icon';

export default Crop54Icon
