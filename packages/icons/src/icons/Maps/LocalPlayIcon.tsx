import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalPlayIconSvg from '../../assets/Maps/local_play_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPlayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalPlayIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalPlayIcon.Style = SvgIcon;
LocalPlayIcon.displayName = 'LocalPlayIcon';

export default LocalPlayIcon
