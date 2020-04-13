import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlipToFrontIconSvg from '../../assets/Action/flip_to_front_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlipToFrontIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FlipToFrontIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FlipToFrontIcon.Style = SvgIcon;
FlipToFrontIcon.displayName = 'FlipToFrontIcon';

export default FlipToFrontIcon
