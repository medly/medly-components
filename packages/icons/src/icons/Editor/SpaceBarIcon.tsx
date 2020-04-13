import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SpaceBarIconSvg from '../../assets/Editor/space_bar_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpaceBarIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SpaceBarIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SpaceBarIcon.Style = SvgIcon;
SpaceBarIcon.displayName = 'SpaceBarIcon';

export default SpaceBarIcon
