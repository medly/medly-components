// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import SliderSvg from '../assets/Slider.svg';
import SvgIcon, { Props } from '../SvgIcon';

const SliderIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <SliderSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

SliderIcon.Style = SvgIcon;
SliderIcon.displayName = 'SliderIcon';
export default SliderIcon;
