import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SliderIconSvg from '../assets/Slider.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const SliderIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SliderIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SliderIcon.Style = SvgIcon;
SliderIcon.displayName = 'SliderIcon';

export default SliderIcon
