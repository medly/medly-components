import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExposureNeg2IconSvg from '../../assets/Image/exposure_neg_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposureNeg2Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExposureNeg2IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExposureNeg2Icon.Style = SvgIcon;
ExposureNeg2Icon.displayName = 'ExposureNeg2Icon';

export default ExposureNeg2Icon
