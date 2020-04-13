import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExposureNeg1IconSvg from '../../assets/Image/exposure_neg_1_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposureNeg1Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExposureNeg1IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExposureNeg1Icon.Style = SvgIcon;
ExposureNeg1Icon.displayName = 'ExposureNeg1Icon';

export default ExposureNeg1Icon
