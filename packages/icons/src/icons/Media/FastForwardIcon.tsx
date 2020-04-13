import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FastForwardIconSvg from '../../assets/Media/fast_forward_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FastForwardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FastForwardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FastForwardIcon.Style = SvgIcon;
FastForwardIcon.displayName = 'FastForwardIcon';

export default FastForwardIcon
