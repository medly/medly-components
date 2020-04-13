import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BrandingWatermarkIconSvg from '../../assets/Media/branding_watermark_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrandingWatermarkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BrandingWatermarkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BrandingWatermarkIcon.Style = SvgIcon;
BrandingWatermarkIcon.displayName = 'BrandingWatermarkIcon';

export default BrandingWatermarkIcon
