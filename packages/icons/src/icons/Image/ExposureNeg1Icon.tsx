import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExposureNeg1IconSvg from '../../assets/Image/exposure_neg_1_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposureNeg1Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExposureNeg1IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExposureNeg1Icon.Style = SvgIcon;
ExposureNeg1Icon.displayName = 'ExposureNeg1Icon';

export default ExposureNeg1Icon
