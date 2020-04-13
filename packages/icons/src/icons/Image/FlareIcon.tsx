import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlareIconSvg from '../../assets/Image/flare_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlareIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FlareIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FlareIcon.Style = SvgIcon;
FlareIcon.displayName = 'FlareIcon';

export default FlareIcon
