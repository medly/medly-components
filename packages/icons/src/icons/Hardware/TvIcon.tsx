import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TvIconSvg from '../../assets/Hardware/tv_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TvIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TvIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TvIcon.Style = SvgIcon;
TvIcon.displayName = 'TvIcon';

export default TvIcon
