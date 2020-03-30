import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SliderSvg from '../assets/Slider.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const SliderIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SliderSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SliderIcon.Style = SvgIcon;
SliderIcon.displayName = 'SliderIcon';
