import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GradientIconSvg from '../../assets/Image/gradient_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GradientIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GradientIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GradientIcon.Style = SvgIcon;
GradientIcon.displayName = 'GradientIcon';

export default GradientIcon
