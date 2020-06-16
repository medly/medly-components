import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HourglassFullIconSvg from '../../assets/Action/hourglass_full_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HourglassFullIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HourglassFullIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HourglassFullIcon.Style = SvgIcon;
HourglassFullIcon.displayName = 'HourglassFullIcon';

export default HourglassFullIcon
