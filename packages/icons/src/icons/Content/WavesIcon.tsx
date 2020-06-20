import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WavesIconSvg from '../../assets/Content/waves_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WavesIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WavesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WavesIcon.Style = SvgIcon;
WavesIcon.displayName = 'WavesIcon';

export default WavesIcon
