import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TheatersIconSvg from '../../assets/Action/theaters_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TheatersIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TheatersIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TheatersIcon.Style = SvgIcon;
TheatersIcon.displayName = 'TheatersIcon';

export default TheatersIcon
