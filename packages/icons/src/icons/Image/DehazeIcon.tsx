import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DehazeIconSvg from '../../assets/Image/dehaze_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DehazeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DehazeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DehazeIcon.Style = SvgIcon;
DehazeIcon.displayName = 'DehazeIcon';

export default DehazeIcon
