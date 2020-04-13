import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TurnedInIconSvg from '../../assets/Action/turned_in_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TurnedInIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TurnedInIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TurnedInIcon.Style = SvgIcon;
TurnedInIcon.displayName = 'TurnedInIcon';

export default TurnedInIcon
