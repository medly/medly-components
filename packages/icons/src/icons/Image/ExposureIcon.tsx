import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExposureIconSvg from '../../assets/Image/exposure_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposureIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExposureIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExposureIcon.Style = SvgIcon;
ExposureIcon.displayName = 'ExposureIcon';

export default ExposureIcon
