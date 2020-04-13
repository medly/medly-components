import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LooksTwoIconSvg from '../../assets/Image/looks_two_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LooksTwoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LooksTwoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LooksTwoIcon.Style = SvgIcon;
LooksTwoIcon.displayName = 'LooksTwoIcon';

export default LooksTwoIcon
