import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Crop75IconSvg from '../../assets/Image/crop_7_5_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Crop75Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Crop75IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Crop75Icon.Style = SvgIcon;
Crop75Icon.displayName = 'Crop75Icon';

export default Crop75Icon
