import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExplicitIconSvg from '../../assets/Media/explicit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExplicitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExplicitIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExplicitIcon.Style = SvgIcon;
ExplicitIcon.displayName = 'ExplicitIcon';

export default ExplicitIcon
