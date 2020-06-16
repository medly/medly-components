import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BrandingWatermarkIconSvg from '../../assets/Media/branding_watermark_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrandingWatermarkIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BrandingWatermarkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BrandingWatermarkIcon.Style = SvgIcon;
BrandingWatermarkIcon.displayName = 'BrandingWatermarkIcon';

export default BrandingWatermarkIcon
