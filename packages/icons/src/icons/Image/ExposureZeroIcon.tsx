import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExposureZeroIconSvg from '../../assets/Image/exposure_zero_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposureZeroIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExposureZeroIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExposureZeroIcon.Style = SvgIcon;
ExposureZeroIcon.displayName = 'ExposureZeroIcon';

export default ExposureZeroIcon
