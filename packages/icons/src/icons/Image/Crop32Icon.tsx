import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Crop32IconSvg from '../../assets/Image/crop_3_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Crop32Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Crop32IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Crop32Icon.Style = SvgIcon;
Crop32Icon.displayName = 'Crop32Icon';

export default Crop32Icon
