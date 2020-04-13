import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SkipNextIconSvg from '../../assets/Media/skip_next_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SkipNextIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SkipNextIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SkipNextIcon.Style = SvgIcon;
SkipNextIcon.displayName = 'SkipNextIcon';

export default SkipNextIcon
