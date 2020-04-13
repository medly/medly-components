import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EqualizerIconSvg from '../../assets/Media/equalizer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EqualizerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EqualizerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EqualizerIcon.Style = SvgIcon;
EqualizerIcon.displayName = 'EqualizerIcon';

export default EqualizerIcon
