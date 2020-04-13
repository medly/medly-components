import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BlurCircularIconSvg from '../../assets/Image/blur_circular_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BlurCircularIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BlurCircularIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BlurCircularIcon.Style = SvgIcon;
BlurCircularIcon.displayName = 'BlurCircularIcon';

export default BlurCircularIcon
