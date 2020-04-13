import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExposureNeg2IconSvg from '../../assets/Image/exposure_neg_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposureNeg2Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExposureNeg2IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExposureNeg2Icon.Style = SvgIcon;
ExposureNeg2Icon.displayName = 'ExposureNeg2Icon';

export default ExposureNeg2Icon
