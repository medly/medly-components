import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GamesIconSvg from '../../assets/Media/games_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GamesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GamesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GamesIcon.Style = SvgIcon;
GamesIcon.displayName = 'GamesIcon';

export default GamesIcon
