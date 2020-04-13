import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MarkunreadIconSvg from '../../assets/Content/markunread_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MarkunreadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MarkunreadIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MarkunreadIcon.Style = SvgIcon;
MarkunreadIcon.displayName = 'MarkunreadIcon';

export default MarkunreadIcon
