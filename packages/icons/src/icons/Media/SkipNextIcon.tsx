import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SkipNextIconSvg from '../../assets/Media/skip_next_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SkipNextIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SkipNextIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SkipNextIcon.Style = SvgIcon;
SkipNextIcon.displayName = 'SkipNextIcon';

export default SkipNextIcon
